import React from "react";
import BlogThumbnail from "./BlogThumbnail";

const Result = ({ data }) => {
  return (
    <div className="thumbnails row">
      {!data.length ? (
        <h1>No data found!</h1>
      ) : (
        data.map(({ name, description, id }) => (
          <BlogThumbnail
            imgName={name}
            description={description}
            id={id}
            key={id}
          />
        ))
      )}
    </div>
  );
};

export default Result;
