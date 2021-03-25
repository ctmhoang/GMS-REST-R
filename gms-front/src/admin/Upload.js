import React, { useState, useEffect } from "react";
import blog from "../api/Blog";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [flash, setFlash] = useState(
    localStorage.getItem("message") === undefined
      ? ""
      : localStorage.getItem("message")
  );

  useEffect(() => {
    if (flash.length != 0)
      setTimeout(() => {
        localStorage.setItem("message", ""), setFlash("");
      }, 5000);
  }, [flash.length, setFlash]);

  return (
    <div id="page-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">
              UPLOAD
              <small></small>
            </h1>
            <p className="bg-success">{flash}</p>
            <div className="row">
              <div className="col-md-6">
                <form
                  encType="multipart/form-data"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    try {
                      const { size, type, name } = await blog.upload(
                        document.getElementById("file")
                      );
                      const { code } = await blog.add(
                        title,
                        size,
                        type,
                        name,
                        localStorage.getItem("userName") || "Anonymous"
                      );
                      if (code != 200) throw new Error(`lol ${code}`);
                      localStorage.setItem("message", "save successful");
                      setFlash("save successful");
                    } catch (err) {
                      console.error(err);
                    }
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
                    <input type="file" id="file" required />
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
