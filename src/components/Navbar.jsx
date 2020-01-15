import React, { useState } from "react";
import { useDarkmode } from "../hooks/useDarkmode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkmode(false);

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
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
