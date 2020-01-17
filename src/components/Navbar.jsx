import React from "react";
import { NavLink } from "react-router-dom";
import { useDarkmode } from "../hooks/useDarkmode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkmode(false);

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>

      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/signin">Sign-in</NavLink>
      </div>

      <div className="dark-mode__toggle">
        <div
          onClick={setDarkMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
