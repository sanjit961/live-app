import React from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
const StyledButton = styled(Button)`
  margin-top: 10px;
`;
const StyledForm = styled(Form)``;
const StyledInput = styled.input`
  margin-top: 10px;
`;
const StyledContainer = styled(Container)`
  margin-top: 20px;
  height: 100vh;
  color: white;
  width: 40%;
`;
function Login() {
  return (
    <>
      <StyledContainer>
        <h5>Login</h5>
        <StyledForm>
          <StyledInput
            type="text"
            className="form-control"
            placeholder="email or username"
          />
          <StyledInput
            type="password"
            className="form-control"
            placeholder="password"
          />
          <StyledButton variant="primary" type="submit">
            Login
          </StyledButton>
        </StyledForm>
      </StyledContainer>
    </>
  );
}

export default Login;
