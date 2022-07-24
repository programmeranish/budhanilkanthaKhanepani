import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  let [isLinksDisplay, setLinksDisplay] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1300) setLinksDisplay(true);
    });
  }, []);

  function handleMenuClick() {
    setLinksDisplay((isLinksDisplay) => {
      return !isLinksDisplay;
    });
  }
  return (
    <nav>
      <Link to="/" onClick={handleMenuClick}>
        <div className="navbar-brand">Budhanilkantha khanepani</div>
      </Link>
      {isLinksDisplay && (
        <ul className="navItems">
          <Link to="/" onClick={handleMenuClick}>
            <li>Homepage</li>
          </Link>
          <Link to="/payment">
            <li>Pay Bills</li>
          </Link>
          <li>Report</li>
          <li>Location</li>
          <li>Services</li>
          <li>Login</li>
        </ul>
      )}
      <img id="hamburgerMenu" src="hamburger-menu.svg" alt="hamburger menu" onClick={handleMenuClick} />
    </nav>
  );
}
