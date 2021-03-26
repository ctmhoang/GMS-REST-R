import React, { Fragment } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import user from "../api/User";

const Navbar = () => {
  const isAuth = localStorage.getItem("isAuth") || false;
  const userName = localStorage.getItem("userName") || "";
  const nav = useNavigate();
  const loc = useLocation();
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div className="container">
        {isAuth ? (
          <>
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-ex1-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">
                Vist Home Page
              </Link>
            </div>
            <ul className="nav navbar-right top-nav">
              <li className="dropdown">
                <Link
                  to={loc.pathname}
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <i className="fa fa-envelope"></i> <b className="caret"></b>
                </Link>
                <ul className="dropdown-menu message-dropdown">
                  <li className="message-preview">
                    <Link to="/">
                      <div className="media">
                        <span className="pull-left">
                          <img
                            className="media-object"
                            src="http://placehold.it/50x50"
                            alt=""
                          />
                        </span>
                        <div className="media-body">
                          <h5 className="media-heading">
                            <strong>{userName}</strong>
                          </h5>
                          <p className="small text-muted">
                            <i className="fa fa-clock-o"></i> Yesterday at 4:32
                            PM
                          </p>
                          <p>Lorem ipsum dolor sit amet, consectetur...</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="message-preview">
                    <Link to="/">
                      <div className="media">
                        <span className="pull-left">
                          <img
                            className="media-object"
                            src="http://placehold.it/50x50"
                            alt=""
                          />
                        </span>
                        <div className="media-body">
                          <h5 className="media-heading">
                            <strong>{userName}</strong>
                          </h5>
                          <p className="small text-muted">
                            <i className="fa fa-clock-o"></i> Yesterday at 4:32
                            PM
                          </p>
                          <p>Lorem ipsum dolor sit amet, consectetur...</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="message-preview">
                    <Link to="/">
                      <div className="media">
                        <span className="pull-left">
                          <img
                            className="media-object"
                            src="http://placehold.it/50x50"
                            alt=""
                          />
                        </span>
                        <div className="media-body">
                          <h5 className="media-heading">
                            <strong>{userName}</strong>
                          </h5>
                          <p className="small text-muted">
                            <i className="fa fa-clock-o"></i> Yesterday at 4:32
                            PM
                          </p>
                          <p>Lorem ipsum dolor sit amet, consectetur...</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="message-footer">
                    <Link to="/">Read All New Messages</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link
                  to={loc.pathname}
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <i className="fa fa-bell"></i> <b className="caret"></b>
                </Link>
                <ul className="dropdown-menu alert-dropdown">
                  <li>
                    <Link to="/">
                      Alert Name{" "}
                      <span className="label label-default">Alert Badge</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      Alert Name{" "}
                      <span className="label label-primary">Alert Badge</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      Alert Name{" "}
                      <span className="label label-success">Alert Badge</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      Alert Name{" "}
                      <span className="label label-info">Alert Badge</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      Alert Name{" "}
                      <span className="label label-warning">Alert Badge</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      Alert Name{" "}
                      <span className="label label-danger">Alert Badge</span>
                    </Link>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <Link to="/">View All</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link
                  to={loc.pathname}
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <i className="fa fa-user"></i>
                  {userName}
                  <b className="caret"></b>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/">
                      <i className="fa fa-fw fa-user"></i> Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-fw fa-envelope"></i> Inbox
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-fw fa-gear"></i> Settings
                    </Link>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <Link
                      to="/"
                      onClick={() => {
                        localStorage.clear();
                        user.logout();
                        nav("/");
                      }}
                    >
                      <i className="fa fa-fw fa-power-off"></i> Log Out
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul
                className="nav navbar-nav side-nav navbar-inverse"
                style={{ height: "100%" }}
              >
                <li>
                  <Link to="/admin/dashboard">
                    <i className="fa fa-fw fa-dashboard"></i> Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/admin/users">
                    <i className="fa fa-fw fa-bar-chart-o"></i> Users
                  </Link>
                </li>
                <li>
                  <Link to="/admin/upload">
                    <i className="fa fa-fw fa-table"></i> Upload
                  </Link>
                </li>
                <li>
                  <Link to="/admin/blogs">
                    <i className="fa fa-fw fa-table"></i> Blogs
                  </Link>
                </li>
                <li>
                  <Link to="/admin/comments ">
                    <i className="fa fa-fw fa-edit"></i> Comments
                  </Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="/bs-example-navbar-collapse-1"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">
                Visit Home Page
              </Link>
            </div>
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/">About</Link>
                </li>

                <li>
                  <Link to="/admin">Admin</Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
