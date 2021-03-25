import React from "react";
import { Link } from "react-router-dom";

export default function BlogThumbnail({ imgName, description, id }) {
  let hero = "http://placecorgi.com/300/300";

  if (imgName.length) hero = `http://localhost:8765/upload/${imgName}`;

  return (
    <div className="col-xs-6 col-md-3">
      <Link className="thumbnail" to={`/details/${id}`}>
        <img
          className="home_page_photo img-responsive "
          src={hero}
          alt={description}
        />
      </Link>
    </div>
  );
}
