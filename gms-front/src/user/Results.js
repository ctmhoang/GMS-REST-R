import React from "react";
import BlogThumbnail from "./BlogThumbnail";

const Result = ({ data }) => {
  return (
    <div className="thumbnails row">
      {!data.length ? (
        <h1>No data found!</h1>
      ) : (
        data.map((blog) => (
          <BlogThumbnail
            imgName={blog.name}
            description={blog.description}
            key={blog.id}
          />
        ))
      )}
    </div>
  );
};

export default Result;
