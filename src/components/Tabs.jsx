import React, { useState, useEffect } from "react";

import axios from "axios";

export default function Tabs(props) {
  const [infoId, setInfoId] = useState(0);
  const [infos, setInfos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const response = await axios.get(props.headers[infoId].url);
      if (response.status === 200) {
        setLoading(false);
        setInfos(response.data.articles.map((news) => news.description));
      } else {
        setInfos([]);
      }
    }
    fetchData();
  }, [props, infoId]);

  let changeTopic = (id) => {
    setInfoId(id);
  };

  function renderFakeNews() {
    return (
      <ol>
        {infos.map((news, index) => {
          return <li key={index}>{news}</li>;
        })}
      </ol>
    );
  }

  /**
   * For rendering headings in tabs sent by props as headers
   * @returns jsx of headers in span tag
   */
  let loadHeader = () => {
    return props.headers.map((header, index) => (
      <span className={index === infoId ? `active` : ""} onClick={() => changeTopic(index)} key={index}>
        {header.heading}
      </span>
    ));
  };

  return (
    <>
      <div className="tabs-header">
        {loadHeader()}
        <span className="line"></span>
      </div>
      {loading ? (
        <div className="loading-container">
          <div className="loading"></div>
        </div>
      ) : (
        <div className="tabs-data">{renderFakeNews()}</div>
      )}
    </>
  );
}
