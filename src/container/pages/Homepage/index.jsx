import React, { useState, useEffect } from "react";

function Homepage() {
  useEffect(() => {
    let scrollVideo = () => {
      //while scrolling scroll the video
      document.getElementById("waterfall").style.top = `-${window.scrollY}px`;
    };
    window.addEventListener("scroll", scrollVideo);
    return () => {
      window.removeEventListener("scroll", scrollVideo);
    };
  }, []);

  return (
    <div>
      <video id="waterfall" src="waterfall.mp4" type="video/mp4" muted loop autoPlay></video>
      <div className="container">
        <div className="intro-section">Khane pani budhanilkantha</div>
      </div>
    </div>
  );
}

export default Homepage;
