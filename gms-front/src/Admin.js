import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./admin/Login";
const Admin = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
    </Routes>
  );
};
export default Admin;
