import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./admin/Login";
import PrivateRoute from "./utils/PrivateRoute";
import DashBoard from "./admin/Dashboard";
import UserManagement from "./admin/UserManagement";
import UserAdd from "./admin/UserAdd";
import UserEdit from "./admin/UserEdit";
import Upload from "./admin/Upload";
import BlogManagement from "./admin/BlogManagement";
import BlogEdit from "./admin/BlogEdit";
import CommentManagement from "./admin/CommentManagement";

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
      <PrivateRoute
        component={<DashBoard />}
        redirectTo="/admin/login"
        isAuth={localStorage.getItem("isAuth")}
        path="/"
      />
      <PrivateRoute
        component={<UserManagement />}
        redirectTo="/admin/login"
        isAuth={localStorage.getItem("isAuth")}
        path="users"
      />
      <PrivateRoute
        component={<UserAdd />}
        redirectTo="/admin/login"
        isAuth={localStorage.getItem("isAuth")}
        path="users/add"
      />
      <PrivateRoute
        component={<UserEdit />}
        redirectTo="/admin/login"
        isAuth={localStorage.getItem("isAuth")}
        path="users/edit/:id"
      />
      <PrivateRoute
        component={<Upload />}
        redirectTo="/admin/login"
        isAuth={localStorage.getItem("isAuth")}
        path="upload"
      />
      <PrivateRoute
        component={<BlogManagement />}
        redirectTo="/admin/login"
        isAuth={localStorage.getItem("isAuth")}
        path="blogs"
      />
      <PrivateRoute
        component={<BlogEdit />}
        redirectTo="/admin/login"
        isAuth={localStorage.getItem("isAuth")}
        path="blogs/edit/:id"
      />
      <PrivateRoute
        component={<CommentManagement />}
        redirectTo="/admin/login"
        isAuth={localStorage.getItem("isAuth")}
        path="comments"
      />
    </Routes>
  );
};
export default Admin;
