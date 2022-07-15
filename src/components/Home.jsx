import React from "react";

function Home() {
  console.log("hello");
  return (
    <div>
      <video id="waterfall" src="waterfall.mp4" type="video/mp4" muted loop autoPlay></video>
      <nav>
        <ul className="navItems">
          <li>Home</li>
          <li>Pay Bills</li>
          <li>Report</li>
          <li className="navbar-brand">Budhanilkantha khanepani</li>
          <li>Location</li>
          <li>Services</li>
          <li>Maps</li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
