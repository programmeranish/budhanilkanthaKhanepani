import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";

function Homepage() {
  return (
    <div>
      <video id="waterfall" src="waterfall.mp4" type="video/mp4" muted loop autoPlay></video>
      <Navbar />
    </div>
  );
}

export default Homepage;
