import React, { useEffect, useState } from "react";
import blog from "../api/Blog";
import comment from "../api/Comment";
import user from "../api/User";
const DashBoard = () => {
  const [photoNum, setPhotoNum] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    blog.num().then((res) => setPhotoNum(res.size));
    user.num().then((res) => setUserCount(res.size));
    comment.num().then((res) => setCommentCount(res.size));
  }, []);

  return (
    <div id="page-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">
              Admin
              <small>Dashboard</small>
            </h1>

            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div className="panel panel-green">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-xs-3">
                        <i className="fa fa-photo fa-5x"></i>
                      </div>
                      <div className="col-xs-9 text-right">
                        <div className="huge">{photoNum}</div>
                        <div>Photos</div>
                      </div>
                    </div>
                  </div>
                  <a href="photo.php">
                    <div className="panel-footer">
                      <span className="pull-left">Total Photos in Gallery</span>
                      <span className="pull-right">
                        <i className="fa fa-arrow-circle-right"></i>
                      </span>
                      <div className="clearfix"></div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-12">
                <div className="panel panel-yellow">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-xs-3">
                        <i className="fa fa-user fa-5x"></i>
                      </div>
                      <div className="col-xs-9 text-right">
                        <div className="huge">{userCount}</div>

                        <div>Users</div>
                      </div>
                    </div>
                  </div>
                  <a href="user.php">
                    <div className="panel-footer">
                      <span className="pull-left">Total Users</span>
                      <span className="pull-right">
                        <i className="fa fa-arrow-circle-right"></i>
                      </span>
                      <div className="clearfix"></div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="panel panel-red">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-xs-3">
                        <i className="fa fa-support fa-5x"></i>
                      </div>
                      <div className="col-xs-9 text-right">
                        <div className="huge">{commentCount}</div>
                        <div>Comments</div>
                      </div>
                    </div>
                  </div>
                  <a href="comment.php">
                    <div className="panel-footer">
                      <span className="pull-left">Total Comments</span>
                      <span className="pull-right">
                        <i className="fa fa-arrow-circle-right"></i>
                      </span>
                      <div className="clearfix"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                id="piechart"
                style={{ width: "900px", height: "500px" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
