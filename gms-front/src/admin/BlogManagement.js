import React, { useState, useEffect } from "react";
import blog from "../api/Blog";

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([]);
  const [isChange, setIsChange] = useState(true);

  useEffect(() => {
    //TOODO
    if (isChange) {
      setBlogs([]);
      setIsChange(false);
    }
  }, []);
  return (
    <div id="page-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">
              Photos
              <small></small>
            </h1>

            <div className="col-md-12">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Id</th>
                    <th>File Name</th>
                    <th>Tittle</th>
                    <th>size</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog, idx) => (
                    <tr key={idx}>
                      <td>
                        <img className="admin-photo-thumbnail" src="#" alt="" />

                        <div className="action_links">
                          <a className="delete_link" href="#">
                            Delete
                          </a>
                          <a href="#">Edit</a>
                          <a href="#">View</a>
                        </div>
                      </td>
                      <td>{blog.id}</td>
                      <td>{blog.name}</td>
                      <td>{blog.title}</td>
                      <td>{blog.size}</td>
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

export default BlogManagement;
