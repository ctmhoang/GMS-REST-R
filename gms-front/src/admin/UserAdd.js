import React, { useState } from "react";
import { useNavigate } from "react-router";
import user from "../api/User";
const UserAdd = () => {
  const [username, setUsername] = useState("");
  const [fst, setFst] = useState("");
  const [lst, setLst] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  return (
    <div id="page-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">
              Create User
              <small>Subheading</small>
            </h1>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                user
                  .add(username, password, lst, fst)
                  .then((res) => {
                    if (res.code != 200) throw new Error();
                    nav("/admin/users");
                  })
                  .catch(console.error);
              }}
            >
              <div className="col-md-6 col-md-offset-3">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="first name">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    className="form-control"
                    value={fst}
                    onChange={(e) => setFst(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="last name">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    className="form-control"
                    value={lst}
                    onChange={(e) => setLst(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="submit"
                    name="create"
                    className="btn btn-primary pull-right"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserAdd;
