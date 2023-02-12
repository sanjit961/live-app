import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import { Button, Row, Col } from "react-bootstrap";
import Home from "./Home";
import View from "./View";
import Add from "./Add";
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  margin: 4px;
  padding: 4px;
  color: white;
  line-height: 10vh;
  font-size: 18px;
  :hover {
    color: white;
    text-decoration: underline;
  }
`;
const StyledNav = styled.nav`
  text-decoration: none;
  background-color: black;
  height: 10vh;
`;
function NavMenu() {
  return (
    <>
      <StyledNav>
        <StyledNavLink to={"/"}>Example</StyledNavLink>
        <StyledNavLink to={"/signup"}>SignUp</StyledNavLink>
        <StyledNavLink to={"/login"} style={{ float: "right" }}>
          LogIn
        </StyledNavLink>
        <StyledNavLink to={"/"} style={{ float: "right" }}>
          Logout
        </StyledNavLink>
      </StyledNav>
    </>
  );
}

export default NavMenu;
