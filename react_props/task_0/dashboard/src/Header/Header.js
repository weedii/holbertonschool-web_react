import React from "react";
import logo from "../hlogo.jpg";
import "./Header.css";

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} alt="logo" />
      <h1>School dashboard</h1>
    </header>
  );
};

export default Header;
