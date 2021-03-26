import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";

import user from "../api/User";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  if (localStorage.getItem("isAuth")) return <Navigate to="/admin/dashboard" />;

  return (
    <div className="col-md-4 col-md-offset-3">
      <form
        id="login-id"
        onSubmit={(e) => {
          e.preventDefault();
          user.login(userName, password).then((res) => {
            if (res.code == 400) {
              setUserName("");
              setPassword("");
            } else {
              localStorage.setItem("isAuth", true);
              localStorage.setItem("userName", res.code);
              localStorage.setItem("message", "");
              nav("/admin");
            }
          });
        }}
      >
        <div className="form-group">
          <label htmlFor="usr">Username</label>
          <input
            type="text"
            className="form-control"
            name="usr"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
        </div>

        <div className="form-group">
          <label htmlFor="pwd">Password</label>
          <input
            type="password"
            className="form-control"
            name="pwd"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
