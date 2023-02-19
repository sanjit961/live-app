import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  margin-top: 10px;
  margin-left: 16px;
  padding: 4px;
  color: white;
  line-height: 8vh;
  font-size: 18px;
  :hover {
    color: white;
    text-decoration: underline;
  }
`;
const StyledNavRight = styled(NavLink)`
  text-decoration: none;
  margin-top: 10px;
  margin-left: 16px;
  padding: 4px;
  color: white;
  line-height: 8vh;
  font-size: 18px;
  float: right;
  margin-top: 0px;
  margin-right: 10px;
  padding: 0px;
  :hover {
    color: white;
    text-decoration: underline;
  }
`;
const StyledNav = styled.nav`
  text-decoration: none;
  height: 8vh;
`;

function PublicNav() {
  return (
    <>
      <StyledNav>
        <StyledNavLink to={"/"}>Logo</StyledNavLink>
        <StyledNavLink to={"/"}>Products</StyledNavLink>
        <StyledNavLink to={"/"}>Example</StyledNavLink>
        {true && <StyledNavLink to={"/signup"}>Sign up</StyledNavLink>}
        {false ? (
          <StyledNavRight to={"/"}>Logout</StyledNavRight>
        ) : (
          <StyledNavRight to={"/login"}>Login</StyledNavRight>
        )}
      </StyledNav>
    </>
  );
}

export default PublicNav;
