import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BASE_URL } from "../constant/apiEndpoints";
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
`;
function SignUp() {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [hobby, setHobby] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const formSumbit = (e) => {
    e.preventDefault();
    let data = { name, username, phone, hobby, email };
    console.log(data);
    if (
      name.trim() !== "" &&
      username.trim() !== "" &&
      phone.trim() !== "" &&
      hobby.trim() !== "" &&
      email.trim() !== ""
    ) {
      fetch(`${BASE_URL}/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.Message === "User has been registered successfully!") {
            alert("Registration Success!!!");
            setEmail("");
            setUserName("");
            setHobby("");
            setName("");
            setPhone("");
          } else {
            alert("something went wrong!");
          }
        });
    } else {
      alert("Please Fill All Fields!");
    }
  };
  return (
    <>
      <StyledContainer>
        <h5 className="text-light">Register</h5>
        <StyledForm onSubmit={formSumbit}>
          <StyledInput
            className="form-control "
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            required={true}
          />
          <StyledInput
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required={true}
          />
          <StyledInput
            className="form-control"
            type="password"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            placeholder="enter password again"
            required={true}
          />
          <StyledInput
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <StyledInput
            className="form-control"
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="username"
          />
          <StyledInput
            className="form-control"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="phone"
          />
          <StyledInput
            className="form-control"
            type="text"
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
            placeholder="hobby"
          />

          <StyledButton variant="primary" type="submit">
            Submit
          </StyledButton>
        </StyledForm>
      </StyledContainer>
    </>
  );
}

export default SignUp;
