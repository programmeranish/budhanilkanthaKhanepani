import React, { useEffect } from "react";
import Tabs from "../../../components/Tabs";

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
    <>
      <video id="waterfall" src="waterfall.mp4" type="video/mp4" muted loop autoPlay></video>
      <div className="container">
        <div className="tabs-section">
          <Tabs
            headers={[
              { heading: "Notice", url: "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0c4f5ee91c1c4c0aa6c8486b46b56a22" },
              { heading: "News", url: "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0c4f5ee91c1c4c0aa6c8486b46b56a22" },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default Homepage;
