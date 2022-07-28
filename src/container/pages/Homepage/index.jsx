import React, { useEffect } from "react";
import Tabs from "../../../components/Tabs";
import { getFakeNews, getFakeNotices } from "../../../FakeData/FakeNews/getFakeNews";

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
              { heading: "Notice", datas: getFakeNotices },
              { heading: "News", datas: getFakeNews },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default Homepage;
