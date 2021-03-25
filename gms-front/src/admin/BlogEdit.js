import React, { useState } from "react";
import blog from "../api/Blog";

const BlogEdit = ({
  id,
  author,
  title,
  caption,
  description,
  name,
  type,
  size,
}) => {
  const [titleBlog, setTitleBlog] = useState(title);
  const [capionBlog, setCapionBlog] = useState(caption);
  const [desc, setDesc] = useState(description);
  return (
    <div id="page-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">
              Photos
              <small>Subheading</small>
            </h1>

            <form action="" method="post">
              <div className="col-md-8">
                <div className="form-group">
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    value={titleBlog}
                    onChange={(e) => setTitleBlog(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <a className="thumbnail" href="#">
                    <img src="#" alt="" />
                  </a>
                </div>

                <div className="form-group">
                  <label htmlFor="caption">Caption</label>
                  <input
                    type="text"
                    name="caption"
                    className="form-control"
                    value={capionBlog}
                    onChange={(e) => setCapionBlog(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="caption">Description</label>
                  <textarea
                    className="form-control"
                    name="desc"
                    id=""
                    cols="30"
                    rows="10"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className="col-md-4">
                <div className="photo-info-box">
                  <div className="info-box-header">
                    <h4>
                      Save{" "}
                      <span
                        id="toggle"
                        className="glyphicon glyphicon-menu-up pull-right"
                      ></span>
                    </h4>
                  </div>
                  <div className="inside">
                    <div className="box-inner">
                      <p className="text ">
                        Photo Id:{" "}
                        <span className="data photo_id_box">{id}</span>
                      </p>
                      <p className="text">
                        Filename: <span className="data">{name}</span>
                      </p>
                      <p className="text">
                        File Size: <span className="data">{size}</span>
                      </p>
                    </div>
                    <div className="info-box-footer clearfix">
                      <div className="info-box-delete pull-left">
                        <a href="#" className="btn btn-danger btn-lg ">
                          Delete
                        </a>
                      </div>
                      <div className="info-box-update pull-right ">
                        <input
                          type="submit"
                          name="update"
                          value="Update"
                          className="btn btn-primary btn-lg "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogEdit;
