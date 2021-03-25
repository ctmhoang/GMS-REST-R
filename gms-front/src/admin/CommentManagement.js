import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import comment from "../api/Comment";

const CommentManagement = () => {
  const [comments, setComments] = useState([]);
  const [isChange, setIsChange] = useState(true);

  useEffect(() => {
    if (isChange) {
      comment
        .fetch()
        .then(({ comments }) => setComments(comments))
        .catch(console.error);
      setIsChange(false);
    }
  }, [isChange]);
  return (
    <div id="page-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">All Comments</h1>

            <div className="col-md-12">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Author</th>
                    <th>Body</th>
                  </tr>
                </thead>
                <tbody>
                  {comments.map((com, idx) => (
                    <tr key={idx}>
                      <td>
                        <Link to={`/details/${com.pid}`}>{com.id}</Link>
                      </td>

                      <td>
                        {com.author}
                        <div className="action_links">
                          <button
                            className="btn"
                            onClick={(e) => {
                              e.preventDefault();
                              comment
                                .del(com.id)
                                .then((res) => {
                                  if (res.code != 200) throw new Error("lol");
                                  setIsChange(true);
                                })
                                .catch(console.error);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </td>

                      <td>{com.body}</td>
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

export default CommentManagement;
