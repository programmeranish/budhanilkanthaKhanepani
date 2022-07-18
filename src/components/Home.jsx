import React, { useState, useEffect } from "react";

function Home() {
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
    <div>
      {/* <video id="waterfall" src="waterfall.mp4" type="video/mp4" muted loop autoPlay></video> */}
      <nav>
        <div className="navbar-brand">Budhanilkantha khanepani</div>
        {isLinksDisplay && (
          <ul className="navItems">
            <li>Home</li>
            <li>Pay Bills</li>
            <li>Report</li>
            <li>Location</li>
            <li>Services</li>
            <li>Login</li>
          </ul>
        )}
        <img id="hamburgerMenu" src="hamburger-menu.svg" alt="hamburger menu" onClick={handleMenuClick} />
      </nav>
    </div>
  );
}

export default Home;
