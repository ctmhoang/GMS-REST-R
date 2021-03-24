import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./admin/Login";
import PrivateRoute from "./utils/PrivateRoute";
import DashBoard from "./admin/Dashboard";
const Admin = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />

      <PrivateRoute
        component={<DashBoard />}
        redirectTo="/admin/login"
        isAuth={localStorage.getItem("isAuth")}
        path="dashboard"
      />
    </Routes>
  );
};
export default Admin;
