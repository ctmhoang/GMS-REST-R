import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import blog from "../api/Blog";

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([]);
  const [isChange, setIsChange] = useState(true);

  useEffect(() => {
    if (isChange) {
      blog
        .blogs()
        .then(({ photos }) => setBlogs(photos))
        .catch(console.error);
      setIsChange(false);
    }
  }, [isChange]);
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
                  {blogs.map((b, idx) => (
                    <tr key={idx}>
                      <td>
                        <img className="admin-photo-thumbnail" src="#" alt="" />

                        <div className="action_links">
                          <button
                            className="btn"
                            onClick={(e) => {
                              e.preventDefault();
                              blog
                                .del(b.id)
                                .then((res) => {
                                  if (res.code != 200) throw new Error("lol");
                                  setIsChange(true);
                                })
                                .catch(console.error);
                            }}
                          >
                            Delete
                          </button>
                          <Link to={`/admin/blogs/edit/${b.id}`}>Edit</Link>{" "}
                          <Link to={`/details/${b.id}`}>View</Link>{" "}
                        </div>
                      </td>
                      <td>{b.id}</td>
                      <td>{b.name}</td>
                      <td>{b.title}</td>
                      <td>{b.size}</td>
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
