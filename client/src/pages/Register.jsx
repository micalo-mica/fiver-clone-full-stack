import styled from "styled-components";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import { isEmpty, isEmail, isLength, isMatch } from "../helper/validate";
import newRequest from "../helper/newRequest";
import { toast } from "react-toastify";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.whitesmoke};
`;
const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.blue3};
  padding: 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Logo = styled.h2`
  align-self: center;
  color: ${({ theme }) => theme.colors.orange};
`;
const Tittle = styled.h4`
  font-size: 1rem;
  font-weight: 300;
`;
const FormContainer1 = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const LabelContainer = styled.div``;
const Label = styled.label`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.blue3};
`;
const InputContainer = styled.div`
  position: ${({ rel }) => rel};
`;
const Input = styled.input`
  width: 100%;
  height: 2.4rem;
  border-radius: 6px;
  border: none;
  appearance: none;
  font-size: 1rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  color: ${({ theme }) => theme.colors.blue3};
  box-shadow: 13px 11px 44px 16px rgba(0, 0, 0, 0.18);
  -webkit-box-shadow: 13px 11px 44px 16px rgba(0, 0, 0, 0.18);
  -moz-box-shadow: 13px 11px 44px 16px rgba(0, 0, 0, 0.18);
  &:focus {
    outline: none;
  }
`;

const IconVisible = styled(AiOutlineEye)`
  position: absolute;
  right: 0.5rem /* 8px */;
  top: 0.5rem /* 8px */;
  cursor: pointer;
`;
const IconNotVisible = styled(AiOutlineEyeInvisible)`
  position: absolute;
  right: 0.5rem /* 8px */;
  top: 0.5rem /* 8px */;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.8rem;
`;
const Button = styled.button`
  border: none;
  padding: 0.5rem 0.8rem;
  background-color: ${({ theme }) => theme.colors.btn};
  color: ${({ theme }) => theme.colors.orange};
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.3rem;
`;
const FormNotMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
const NoAccountText = styled.div`
  text-align: center;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.yellow2};
`;
const SignUp = styled.div`
  text-align: center;
  font-size: 0.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.orange};
  padding: 0.3rem 0.2rem;
  border-radius: 0.2rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.btn};
    border: none;
  }
`;

const Register = () => {
  const [visible, setVisible] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = userInfo;
  console.log(userInfo);

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const register = async (e) => {
    e.preventDefault();
    // check fields
    if (isEmpty(name) || isEmpty(password))
      return toast.error("Fill all field !");
    // check email
    if (!isEmail(email))
      return toast.error("Please enter a valid email address.");
    // check password
    if (isLength(password))
      return toast.error("Password must be at least 6 characters.");
    // send to server
    try {
      const res = await newRequest.post("auth/register", {
        name,
        email,
        password,
      });
      toast.success(res.data.msg);
    } catch (error) {
      toast.error(error.response.data);
    }
    handleReset();
  };

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    setUserInfo({
      ...userInfo,
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <Container>
      <Wrapper>
        <Logo>Fiver-clone</Logo>
        <Tittle>Register as a new user</Tittle>
        <FormContainer1>
          <Form onSubmit={register}>
            <LabelContainer>
              <Label htmlFor="email">Name</Label>
              {/* <InputContainer> */}
              <Input
                type="text"
                name="name"
                autoComplete="name"
                required
                onChange={handleChange}
              />
              {/* </InputContainer> */}
            </LabelContainer>
            <LabelContainer>
              <Label htmlFor="email">Email address</Label>
              {/* <InputContainer> */}
              <Input
                type="email"
                name="email"
                autoComplete="email"
                required
                onChange={handleChange}
              />
              {/* </InputContainer> */}
            </LabelContainer>
            {/* password */}
            <LabelContainer>
              <Label htmlFor="email">Password</Label>
              <InputContainer rel="relative">
                <Input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="password"
                  required
                  onChange={handleChange}
                />
                {visible ? (
                  <IconVisible onClick={() => setVisible(false)} />
                ) : (
                  <IconNotVisible onClick={() => setVisible(true)} />
                )}
              </InputContainer>
            </LabelContainer>
            <Button type="submit">submit</Button>
          </Form>
          <ButtonContainer>
            <FormNotMember>
              <NoAccountText>Already have an account?</NoAccountText>
              <Link to="/login">
                <SignUp>Sign In</SignUp>
              </Link>
            </FormNotMember>
          </ButtonContainer>
        </FormContainer1>
      </Wrapper>
    </Container>
  );
};

export default Register;
