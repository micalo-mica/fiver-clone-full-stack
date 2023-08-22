import styled from "styled-components";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isEmpty, isEmail, isLength, isMatch } from "../helper/validate";
import newRequest from "../helper/newRequest";
import { toast } from "react-toastify";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

const Container = styled.div`
  min-height: 100vh;
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
  margin-top: 0.5rem;
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
const SmallBtn = styled.div`
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

const Login = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const { dispatch } = useContext(AuthContext);

  const { email, password } = userInfo;

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    // check fields
    if (isEmpty(email) || isEmpty(password))
      return toast.error("Please fill in all fields.");
    // check email
    if (!isEmail(email))
      return toast.error("Please enter a valid email address.");
    try {
      const res = await newRequest.post("auth/login/loginUser", {
        email,
        password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.info });
      navigate("/");
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Logo>Fiver-clone</Logo>
        <Tittle>Sign In</Tittle>
        <FormContainer1>
          <Form onSubmit={handleSubmit}>
            <LabelContainer>
              <Label htmlFor="email">Email address</Label>
              <Input
                type="email"
                name="email"
                autoComplete="email"
                required
                onChange={handleChange}
              />
            </LabelContainer>
            <LabelContainer>
              {/* password */}
              <Label htmlFor="email">Password</Label>
              <InputContainer rel="relative">
                <Input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
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
            <Button type="submit">Login</Button>
          </Form>
          <ButtonContainer>
            <Link to="/forgotPassword">
              <SmallBtn type="submit">forgot password</SmallBtn>
            </Link>
            <FormNotMember>
              <NoAccountText>Do not have an account?</NoAccountText>
              <Link to="/register">
                <SmallBtn>Register</SmallBtn>
              </Link>
            </FormNotMember>
          </ButtonContainer>
        </FormContainer1>
      </Wrapper>
    </Container>
  );
};

export default Login;
