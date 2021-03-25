import React, { useState, useEffect } from "react";
import comment from "../api/Comment";

const CommentManagement = () => {
  const [comments, setComments] = useState([]);
  const [isChange, setIsChange] = useState(true);

  useEffect(() => {
    //TOODO
    if (isChange) {
      setComments([]);
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
                        <a href="../photo.php?id=<?=$comment->pid?>">
                          {com.id}{" "}
                        </a>
                      </td>

                      <td>
                        {com.author}
                        <div className="action_links">
                          <a href="delete_comment.php?id=<?php echo $comment->id; ?>">
                            Delete
                          </a>
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
