import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../component/Home";
import Login from "../component/Login";
import SignUp from "../component/SignUp";
function PublicRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default PublicRoutes;
