import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { isEmail, isEmpty } from "../helper/validate";
import { toast } from "react-toastify";
import newRequest from "../helper/newRequest";

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

const Button = styled.button`
  width: 100%;
  margin-top: 1rem;
  border: none;
  padding: 0.5rem 0.8rem;
  background-color: ${({ theme }) => theme.colors.btn};
  color: ${({ theme }) => theme.colors.orange};
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 0.3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.8rem;
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

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    setEmail({ email: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // check fields
    if (isEmpty(email)) return toast.error("Please fill in all fields.");
    // check email
    if (!isEmail(email))
      return toast.error("Please enter a valid email address.");
    try {
      await newRequest.post("auth/forgot/email", { email });
      handleReset();
      return toast.success("Please check your email 📧");
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Logo>Fiver-clone</Logo>
        <Tittle>Enter your email address</Tittle>
        <FormContainer1>
          <Form onSubmit={handleSubmit}>
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
            <Button type="submit">submit</Button>
          </Form>
          <ButtonContainer>
            <Link to="/login">
              <SmallBtn type="submit">Sign in</SmallBtn>
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
}

export default ForgotPassword;
