import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: white;
  :hover {
    color: white;
    text-decoration: underline;
  }
`;
const StyledDiv = styled.div`
  background-color: black;
  display: flex;
  margin-top: 50px;
`;
const StyledNav = styled.nav`
  width: 50%;
  margin-top: 40px;
  margin-bottom: 10px;
  margin-left: 50px;
  text-align: center;
`;
const StyledList = styled.li`
  color: white;
  list-style: none;
  font-size: 18px;
`;
const StyledSpan = styled.span`
  color: white;
  height: 100px;
  width: 3px;
  background-color: white;
  margin-top: 50px;
`;
function Footer() {
  return (
    <StyledDiv>
      <StyledNav>
        <ul>
          <StyledList>
            <StyledLink to={"/"}>Contact us</StyledLink>
          </StyledList>
          <StyledList>
            <StyledLink to={"/"}>About us</StyledLink>
          </StyledList>
          <StyledList>
            <StyledLink to={"/"}>Our services</StyledLink>
          </StyledList>
          <StyledList>
            <StyledLink to={"/"}>Customer care</StyledLink>
          </StyledList>
        </ul>
      </StyledNav>
      <StyledSpan />
      <StyledNav>
        <ul>
          <StyledList>
            <StyledLink to={"/"}>Trending</StyledLink>
          </StyledList>
          <StyledList>
            <StyledLink to={"/"}>Partnership</StyledLink>
          </StyledList>
          <StyledList>
            <StyledLink to={"/"}>Help</StyledLink>
          </StyledList>
          <StyledList>
            <StyledLink to={"/"}>Affiliate program</StyledLink>
          </StyledList>
        </ul>
      </StyledNav>
    </StyledDiv>
  );
}

export default Footer;
