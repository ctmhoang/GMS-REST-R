import React, { useState } from "react";
const SearchParams = () => {
  const [query, setQuery] = useState("");
  async function requestBlogs() {
    // TODO: Call API to get blogs
    return null;
  }
  return (
    <div className="row">
      <div className="well">
        <h4>Blog Search</h4>
        <form
          className="input-group"
          onSubmit={(e) => {
            e.preventDefault();
            requestBlogs();
          }}
        >
          <input
            type="text"
            className="form-control"
            name="s"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="input-group-btn">
            <button className="btn btn-default">
              <span className="glyphicon glyphicon-search"></span>
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SearchParams;
