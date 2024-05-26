import styled, { keyframes } from "styled-components";
import React, { useState } from "react";

const CloseButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
`;

const CloseButtonBasedOnSvg = ({ onClick }) => (
  <CloseButton onClick={onClick}>
    <img src="/close_button.svg" alt="close button" />
  </CloseButton>
);

const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

const Card = styled.div`
  width: 463px;
  background: #27292d;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-in-out;
  z-index: 1001;
`;

const Title = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #6b6c70;
  margin: 0;
  display: flex;
  justify-content: center;
`;

const Subtitle = styled.h3`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #ffffff;
  margin: 10px 0 20px;
  display: flex;
  justify-content: center;
`;

const Label = styled.label`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #c5c7ca;
  margin-bottom: 5px;
`;

const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #7f8084;
  background: #1c1e21;
  border: 1.5px solid #35373b;
  border-radius: 4px;
  margin-top: 5px;
  box-sizing: border-box;

  &::placeholder {
    color: #7f8084;
  }
`;

const ForgotPasswordContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ForgotPassword = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: #c5c7ca;
  text-align: right;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  background: #4a96ff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background: #3a86f0;
  }
`;

const RegisterLink = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #7f8084;
  display: flex;
  justify-content: start;
  gap: 5px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const LoginRegisterForm = ({ onClose, handleLoginClick }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <ModalOverlay>
      <Card onClick={(e) => e.stopPropagation()}>
        <CloseButtonBasedOnSvg onClick={onClose} />
        <Title>{isLogin ? "WELCOME BACK" : "SIGN UP"}</Title>
        <Subtitle>
          {isLogin ? "Log into your account" : "Create an account to continue"}
        </Subtitle>

        {isLogin ? (
          <InputContainer>
            <Label>Email or Username</Label>
            <Input type="text" placeholder="Enter your email or username" />
          </InputContainer>
        ) : (
          <>
            <InputContainer>
              <Label>Email</Label>
              <Input type="text" placeholder="Enter your email" />
            </InputContainer>

            <InputContainer>
              <Label>Username</Label>
              <Input type="text" placeholder="Enter your username" />
            </InputContainer>
          </>
        )}

        <InputContainer>
          <ForgotPasswordContainer>
            <Label>Password</Label>
            {isLogin && <ForgotPassword>Forgot password?</ForgotPassword>}
          </ForgotPasswordContainer>
          <Input type="password" placeholder="Enter your password" />
        </InputContainer>

        <Button onClick={handleLoginClick}>
          {isLogin ? "Login now" : "Continue"}
        </Button>

        {isLogin ? (
          <RegisterLink>
            <div>Not registered yet?</div>
            <div
              onClick={() => setIsLogin(false)}
              style={{ color: "white", cursor: "pointer" }}
            >
              Register →
            </div>
          </RegisterLink>
        ) : (
          <RegisterLink>
            <div>Already have an account?</div>
            <div
              onClick={() => setIsLogin(true)}
              style={{ color: "white", cursor: "pointer" }}
            >
              Login →
            </div>
          </RegisterLink>
        )}
      </Card>
    </ModalOverlay>
  );
};

export default LoginRegisterForm;
