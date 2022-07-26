import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

function Navbar() {
  let [isLinksDisplay, setLinksDisplay] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1300) setLinksDisplay(true);
    });
  }, []);

  /**
   * @param(event) event for clicked target value
    
    */
  function handleMenuClick(event) {
    if (event.target.tagName === `LI` || event.target.tagName === `IMG`) {
      if (window.innerWidth <= 1300) {
        setLinksDisplay((isLinksDisplay) => {
          return !isLinksDisplay;
        });
      }
    }
  }
  return (
    <nav onClick={(event) => handleMenuClick(event)}>
      <Link to="/">
        <div className="navbar-brand">Budhanilkantha khanepani</div>
      </Link>
      {isLinksDisplay && (
        <ul className="navItems">
          <Link to="/">
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
      <img id="hamburgerMenu" src="hamburger-menu.svg" alt="hamburger menu" />
    </nav>
  );
}

export default Navbar;
