import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "../component/Add";
import Home from "../component/Home";
import Login from "../component/Login";
import NavMenu from "../component/NavMenu";
import SignUp from "../component/SignUp";
import Update from "../component/Update";
import View from "../component/View";
function PublicRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/view" element={<View />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default PublicRoutes;
