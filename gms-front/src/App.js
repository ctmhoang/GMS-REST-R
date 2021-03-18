import React from "react";
import { render } from "react-dom";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import SearchParams from "./user/SearchParams";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
