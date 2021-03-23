import React, { useState, useEffect } from "react";
import blog from "../api/Blog";
import Result from "./Results";

const SearchParams = () => {
  const [query, setQuery] = useState("");
  const [posts, SetPosts] = useState([]);
  async function requestBlogs() {
    const blogs = await blog.search(query);
    SetPosts(blogs || []);
  }

  useEffect(() => {
    blog.blogs().then(({ photos }) => SetPosts(photos), console.error);
  }, []);
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
      <Result data={posts} />
    </div>
  );
};

export default SearchParams;
