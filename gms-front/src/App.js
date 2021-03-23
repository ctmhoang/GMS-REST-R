import React from "react";
import { render } from "react-dom";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import SearchParams from "./user/SearchParams";
import Details from "./user/Details";
import NavBar from "./component/Navbar";

let isAuth = localStorage.getItem("auth") || false;
let userName = localStorage.getItem("userName") || "";

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

render(
  <NavBar isAuth={true} userName="Cameron Darren" />,
  document.getElementById("nav")
);
render(<App />, document.getElementById("root"));
