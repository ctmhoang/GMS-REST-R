import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ component, redirectTo, isAuth, path, ...props }) => {
  if (!isAuth) return <Navigate to={redirectTo} />;
  return <Route path={path} element={component} {...props} />;
};
export default PrivateRoute;
