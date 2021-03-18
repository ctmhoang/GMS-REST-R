import React from "react";
import { Link } from "react-router-dom";

export default function BlogThumbnail({ imgName, description }) {
  let hero = "http://placecorgi.com/300/300";

  // if (imgName.length) hero = `/home/cameron/imgs/${imgName}`;

  return (
    <div className="col-xs-6 col-md-3">
      <Link className="thumbnail" to="/">
        <img
          className="home_page_photo img-responsive "
          src={hero}
          alt={description}
        />
      </Link>
    </div>
  );
}
