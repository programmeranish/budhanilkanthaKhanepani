import React, { useState, useEffect } from "react";

function Home() {
  let [isMenuDisplay, setMenuDisplay] = useState(false);
  function handleMenuClick() {
    console.log("before", isMenuDisplay);

    setMenuDisplay((isMenuDisplay) => {
      return !isMenuDisplay;
    });
    console.log(isMenuDisplay);
  }
  return (
    <div>
      <video id="waterfall" src="waterfall.mp4" type="video/mp4" muted loop autoPlay></video>
      <nav>
        <div className="navbar-brand">Budhanilkantha khanepani</div>
        {isMenuDisplay && (
          <ul className="navItems">
            <li>Home</li>
            <li>Pay Bills</li>
            <li>Report</li>
            <li>Location</li>
            <li>Services</li>
            <li>Maps</li>
          </ul>
        )}
        <img id="hamburgerMenu" src="hamburger-menu.svg" alt="hamburger menu" onClick={handleMenuClick} />
      </nav>
    </div>
  );
}

export default Home;
