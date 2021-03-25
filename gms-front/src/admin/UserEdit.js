import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import user from "../api/User";

const UserEdit = () => {
  const { id } = useParams();
  const [username, setUsername] = useState("");
  const [fstName, setFstName] = useState("");
  const [lstName, setLstName] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();
  useEffect(() => {
    user
      .get(id)
      .then(({ user }) => {
        setUsername(user.usr);
        setPassword(user.pwd);
        setLstName(user.lst);
        setFstName(user.fst);
      })
      .catch(console.error);
  }, [id]);
  return (
    <div id="page-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">
              users
              <small>Subheading</small>
            </h1>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                user
                  .edit(id, username, password, fstName, lstName)
                  .then((res) => {
                    if (Object.keys(res).length != 2) throw new Error("lol");
                  })
                  .catch(console.error);
                nav("/admin/users");
              }}
            >
              <div className="col-md-6">
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
                    value={fstName}
                    onChange={(e) => setFstName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="last name">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    className="form-control"
                    value={lstName}
                    onChange={(e) => setLstName(e.target.value)}
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
                    name="update"
                    className="btn btn-primary pull-right"
                    value="Update"
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

export default UserEdit;
