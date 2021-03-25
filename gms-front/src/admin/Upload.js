import React, { useState } from "react";
import photo from "../api/Photo";

const Upload = () => {
  const [title, setTitle] = useState("");
  return (
    <div id="page-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">
              UPLOAD
              <small></small>
            </h1>

            <div className="row">
              <div className="col-md-6">
                <form
                  encType="multipart/form-data"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // TODO
                  }}
                >
                  <div className="form-group">
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <input type="file" name="file" required />
                  </div>

                  <button>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Upload;
