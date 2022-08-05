import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

function Payment() {
  //for same reference in every render
  let patientDetails = useMemo(() => {
    return [
      { name: "anish", url: "https://api.publicapis.org/entries", data: 0 },
      { name: "shrestha", url: "https://api.publicapis.org/entries", data: 0 },
      { name: "hero", url: "https://api.publicapis.org/entries", data: 0 },
    ];
  }, []);

  let [patients, setPatients] = useState(patientDetails);

  useEffect(() => {
    let promises = patientDetails.map((patient) => {
      return axios.get(patient.url);
    });

    async function getData() {
      let responses = await Promise.all(promises);
      setPatients((patients) => {
        let newData = [];
        responses.forEach((response, index) => {
          newData.push({ ...patients[0], data: response.data.count });
        });
        return newData;
      });
    }
    getData();
  }, [patientDetails]);

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

  function loadCsvData(data) {
    let headers = Object.keys(data[0]);
    console.log("data to csv:", headers.join(","));
    let detailsArray = data.map((patient) => {
      return Object.values(patient);
    });
    let str = "";
    detailsArray.forEach((row) => {
      str = str + row.join(",");
      str = str + "\n";
    });
    console.log(str);
  }

  let data = ["anish shrestha,nepal,budhanlkantha", "/n", "shrestha,anish,hello world"];

  function handleClick() {
    loadCsvData(patientDetails);
  }

  return (
    <div>
      {patients[0].name}:{patients[0].data}
      <button onClick={handleClick}>Download csv</button>
    </div>
  );
}

export default Payment;
