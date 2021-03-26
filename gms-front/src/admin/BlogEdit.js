import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import blog from "../api/Blog";
import ErrorBoundary from "../utils/ErrorBoundary";

const BlogEdit = () => {
  const [titleBlog, setTitleBlog] = useState("");
  const [capionBlog, setCapionBlog] = useState("");
  const [desc, setDesc] = useState("");
  const [imgName, setImgName] = useState("http://placecorgi.com/250");
  const [imgSize, setImgSize] = useState("");
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    blog.get(id).then(({ photo }) => {
      if (photo == null) throw new Error("lol");
      const { title, caption, description, name, size } = photo;
      setTitleBlog(title || "");
      setCapionBlog(caption || "");
      setDesc(description || "");
      setImgName(`http://localhost:8765/upload/${name}` || "");
      setImgSize(size || "");
    });
  }, [id]);
  return (
    <div id="page-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">
              Photos
              <small>Subheading</small>
            </h1>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                blog.edit(id, titleBlog, capionBlog, desc).then((res) => {
                  if (res.code != 200) throw new Error("lol");
                  nav("/admin/blogs");
                });
              }}
            >
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
                  <div className="thumbnail">
                    <img src={imgName} alt="" />
                  </div>
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
                        Filename:{" "}
                        <span className="data">
                          {imgName.match(/\w+\.\w+/gm)[0]}
                        </span>
                      </p>
                      <p className="text">
                        File Size: <span className="data">{imgSize}</span>
                      </p>
                    </div>
                    <div className="info-box-footer clearfix">
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

export default function editWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <BlogEdit {...props} />
    </ErrorBoundary>
  );
}
