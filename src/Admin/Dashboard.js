import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constant/apiEndpoints";
import styled from "styled-components";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
const StyledTable = styled(Table)`
  color: white;
`;
const StyledContainer = styled(Container)``;
const StyledTableRow = styled.tr`
  border-bottom: 1px solid white;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const StyledTableHead = styled.th``;
const StyledHeader = styled.h2`
  text-align: center;
  color: white;
  text-decoration: underline;
`;
const StyledTableData = styled.td``;
const StyledDiv = styled.div`
  height: 90vh;
  margin-top: 50px;
`;
const StyledButton = styled(Button)`
  color: white;
`;
function Dashboard() {
  const [user, setUser] = useState();
  const getUsers = () => {
    fetch(`${BASE_URL}/getAllUsers`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUser(result.results);
        console.log(result.results);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);
  const deleteUser = (id) => {
    let confirm = window.confirm("Are you sure want to delete this user?");
    if (confirm) {
      fetch(`${BASE_URL}/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          alert(result.message);
          getUsers();
        });
    }
  };
  return (
    <StyledContainer>
      <StyledHeader>Admin Dashboard</StyledHeader>
      <StyledTable>
        <thead>
          <StyledTableRow>
            <StyledTableHead>Student name</StyledTableHead>
            <StyledTableHead>Username</StyledTableHead>
            <StyledTableHead>Email</StyledTableHead>
            <StyledTableHead>Standard</StyledTableHead>
            <StyledTableHead></StyledTableHead>
          </StyledTableRow>
        </thead>
        <tbody>
          <StyledTableRow>
            <StyledTableData>Sanjit</StyledTableData>
            <StyledTableData>sanjit1232</StyledTableData>
            <StyledTableData>sanjit@gmail.com</StyledTableData>
            <StyledTableData>10</StyledTableData>
            <StyledTableData>
              <StyledButton variant="info">View</StyledButton>
            </StyledTableData>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableData>Sanjit</StyledTableData>
            <StyledTableData>sanjit1232</StyledTableData>
            <StyledTableData>sanjit@gmail.com</StyledTableData>
            <StyledTableData>10</StyledTableData>
            <StyledTableData>
              <StyledButton variant="info">View</StyledButton>
            </StyledTableData>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableData>Sanjit</StyledTableData>
            <StyledTableData>sanjit1232</StyledTableData>
            <StyledTableData>sanjit@gmail.com</StyledTableData>
            <StyledTableData>10</StyledTableData>
            <StyledTableData>
              <StyledButton variant="info">View</StyledButton>
            </StyledTableData>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableData>Sanjit</StyledTableData>
            <StyledTableData>sanjit1232</StyledTableData>
            <StyledTableData>sanjit@gmail.com</StyledTableData>
            <StyledTableData>10</StyledTableData>
            <StyledTableData>
              <StyledButton variant="info">View</StyledButton>
            </StyledTableData>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableData>Sanjit</StyledTableData>
            <StyledTableData>sanjit1232</StyledTableData>
            <StyledTableData>sanjit@gmail.com</StyledTableData>
            <StyledTableData>10</StyledTableData>
            <StyledTableData>
              <StyledButton variant="info">View</StyledButton>
            </StyledTableData>
          </StyledTableRow>
        </tbody>
      </StyledTable>
    </StyledContainer>
  );
}

export default Dashboard;
