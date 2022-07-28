import React, { useState, useEffect } from "react";

export default function Tabs(props) {
  const [infoId, setInfoId] = useState(0);
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    setInfos(props.headers[infoId].datas());
  }, [props, infoId]);

  let changeTopic = (id) => {
    setInfoId(id);
  };
  function renderFakeNews() {
    return (
      <ol>
        {infos.map((news) => {
          return <li key={news.id}>{news.title}</li>;
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
      <div className="tabs-data">{renderFakeNews()}</div>
    </>
  );
}
