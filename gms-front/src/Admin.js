import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./admin/Login";
import "../css/admin.css";
const Admin = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
    </Routes>
  );
};
export default Admin;
