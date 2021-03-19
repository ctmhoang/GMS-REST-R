import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../utils/ErrorBoundary";
import blog from "../api/Blog";

const Details = () => {
  const [loading, setLoading] = useState(true);
  const [blogDetails, setBlogDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let isMounted = true;

    blog.get(id).then(({ photo }) => {
      if (!photo) throw new Error("lol");
      if (isMounted)
        setBlogDetails({
          author: photo.author,
          title: photo.title,
          caption: photo.caption,
          desc: photo.description,
          imgName: photo.name,
        });
      setLoading(false);
      return () => {
        isMounted = false;
      };
    });
  }, [id]);

  return (
    <div className="row">
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="col-lg-12">
          <h1>{blogDetails.title}</h1>

          <p className="lead">
            {blogDetails.author == null ? "Anonymous" : blogDetails.author}
          </p>

          <hr />
          <p>
            <span className="glyphicon glyphicon-time"></span> Posted on August
            24, 2030 at 9:00 PM
          </p>

          <hr />

          <img
            className="img-responsive"
            src={blogDetails.imgName}
            alt={blogDetails.caption}
          />

          <hr />

          <p className="lead">{blogDetails.desc}</p>

          <hr />

          <div className="well">
            <h4>Leave a Comment:</h4>
            <form>
              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input type="text" name="author" className="form-control" />
              </div>
              <div className="form-group">
                <textarea
                  name="body"
                  className="form-control"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" name="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <hr />
        </div>
      )}
    </div>
  );
};

export default function detailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
