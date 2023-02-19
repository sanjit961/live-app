import React from "react";
import styled from "styled-components";
const StyledTable = styled.table``;
const StyledTableRow = styled.tr`
  border-bottom: 1px solid white;
`;
const StyledTableHead = styled.th``;
const StyledTableData = styled.td`
  padding-top: 10px;
  padding-bottom: 10px;
`;
const StyledDiv = styled.div`
  height: 90vh;
  margin-top: 50px;
`;
function StudentDashboard() {
  return (
    <StyledDiv className="container">
      <StyledTable className="table text-center text-light">
        <StyledTableRow>
          <StyledTableHead>Name</StyledTableHead>
          <StyledTableHead>Email</StyledTableHead>
          <StyledTableHead>Phone</StyledTableHead>
          <StyledTableHead>Standard</StyledTableHead>
          <StyledTableHead>Marksheet</StyledTableHead>
        </StyledTableRow>
        <StyledTableRow>
          <StyledTableData>Sanjit</StyledTableData>
          <StyledTableData>Sanjit@gmail.com</StyledTableData>
          <StyledTableData>9988776655</StyledTableData>
          <StyledTableData>8</StyledTableData>
          <StyledTableData>View</StyledTableData>
        </StyledTableRow>
      </StyledTable>
    </StyledDiv>
  );
}

export default StudentDashboard;
