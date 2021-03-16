import React from "react";
import { render } from "react-dom";
import { Router } from "react-router";
import SearchParams from "./user/SearchParams";

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <SearchParams />
      </Router>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
