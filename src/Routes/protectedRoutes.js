import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Admin/Dashboard";
import StudentDashboard from "../Student/StudentDashboard";
function ProtectedRoutes() {
  return (
    <>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
      </Routes>
    </>
  );
}

export default ProtectedRoutes;
