import React from "react";
const Comments = ({ data }) => {
  return (
    <div>
      {!data.length
        ? ""
        : data.map(({ author, body, id }) => (
            <div className="media" key={id}>
              <span className="pull-left" href="#">
                <img
                  className="media-object"
                  src="http://placehold.it/64x64"
                  alt=""
                />
              </span>
              <div className="media-body">
                <h4 className="media-heading">
                  {author}
                  <small>August 25, 2030 at 9:30 PM</small>
                </h4>
                {body}
              </div>
            </div>
          ))}
    </div>
  );
};

export default Comments;
