import React, { useEffect, useState } from "react";
import user from "../api/User";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    user
      .fetch()
      .then((res) => {
        setUsers(res.users);
      })
      .catch(console.err);
  }, []);
  return (
    <div id="page-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">Users</h1>

            <a href="add_user.php" className="btn btn-primary">
              Add User
            </a>

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
                  {users.map((user, idx) => (
                    <tr key={idx}>
                      <td>{user.id}</td>

                      <td>
                        {user.usr}
                        <div className="action_links">
                          <a href="delete_user.php?id=<?php echo $user->id; ?>">
                            Delete
                          </a>
                          <a href="edit_user.php?id=<?php echo $user->id; ?>">
                            Edit
                          </a>
                        </div>
                      </td>

                      <td>{user.fst}</td>
                      <td>{user.lst}</td>
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
