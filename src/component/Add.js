import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BASE_URL } from "../constant/apiEndpoints";
import Footer from "./Footer";
function Add() {
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
      <div className="container w-50  mt-3" style={{ height: "90vh" }}>
        <form onSubmit={formSumbit}>
          <input
            className="form-control mt-2"
            type="string"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            required={true}
          />
          <input
            className="form-control mt-2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required={true}
          />
          <input
            className="form-control mt-2"
            type="password"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            placeholder="enter password again"
            required={true}
          />
          <input
            className="form-control mt-2"
            type="string"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="form-control mt-2"
            type="string"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="username"
          />
          <input
            className="form-control mt-2"
            type="string"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="phone"
          />
          <input
            className="form-control mt-2"
            type="string"
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
            placeholder="hobby"
          />

          <button
            className="w-100 btn btn-primary text-light mt-2 ml-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Add;
