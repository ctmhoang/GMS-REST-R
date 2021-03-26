import React from "react";
import { render } from "react-dom";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import SearchParams from "./user/SearchParams";
import Details from "./user/Details";
import NavBar from "./component/Navbar";
import Admin from "./Admin";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<SearchParams />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="admin/*" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));
