import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import user from "../api/User";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [isChange, setIsChange] = useState(true);

  const del = async (id) => {
    try {
      const res = await user.del(id);
      if (res.code != 200) throw new Error("lol");
      setIsChange(true);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (isChange)
      user.fetch().then((res) => {
        setUsers(res.users);
        setIsChange(false);
      });
  }, [isChange]);

  return (
    <div id="page-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">Users</h1>

            <Link className="btn btn-primary" to="/admin/users/add">
              Add User
            </Link>

            <div className="col-md-12">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                  </tr>
                </thead>
                <tbody>
                  {users
                    .filter(({ id }) => id != +localStorage.getItem("id"))
                    .map(({ id, usr, fst, lst }, idx) => (
                      <tr key={idx}>
                        <td>{id}</td>

                        <td>
                          {usr}
                          <div className="action_links">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                del(id);
                              }}
                            >
                              Delete
                            </button>
                            <Link
                              className="btn"
                              role="button"
                              to={`/admin/users/edit/${id}`}
                            >
                              Edit
                            </Link>
                          </div>
                        </td>

                        <td>{fst}</td>
                        <td>{lst}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
