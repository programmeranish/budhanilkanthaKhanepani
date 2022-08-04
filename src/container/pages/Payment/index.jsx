import React, { useState, useEffect } from "react";
import axios from "axios";

function Payment() {
  let patientDetails = [
    { url: "https://api.publicapis.org/entries", data: [] },
    { url: "https://api.publicapis.org/entries", data: [] },
    { url: "https://api.publicapis.org/entries", data: [] },
  ];

  let [patients, setPatients] = useState(patientDetails);

  useEffect(() => {
    let promises = patientDetails.map((patient) => {
      return axios.get(patient.url);
    });
    console.log("let promises are: ", promises);

    async function getData() {
      let datas = await Promise.all(promises);
    }
    getData();
  }, []);

  /**
   *
   * @param {json} data - data to download
   * @param {string} csvFileName -filename
   */
  const downloadCSV = (data, csvFileName) => {
    const blob = new Blob([data], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", `${csvFileName}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  let data = ["anish shrestha,nepal,budhanlkantha", "/n", "shrestha,anish,hello world"];

  function handleClick() {
    downloadCSV(data, "anishshrestha");
  }

  return (
    <div>
      {patients.length}
      something{console.log("from here", patients)}
      <button onClick={handleClick}>Download csv</button>
    </div>
  );
}

export default Payment;
