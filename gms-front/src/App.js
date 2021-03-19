import React from "react";
import { render } from "react-dom";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import SearchParams from "./user/SearchParams";
import Details from "./user/Details";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchParams />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
