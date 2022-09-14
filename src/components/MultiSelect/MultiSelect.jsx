import React, { useState } from "react";

export default function MultiSelect() {
  const options = [
    { value: "something", option: "some" },
    { value: "something", option: "sss" },
    { value: "something", option: "sossme" },
    { value: "something", option: "sossme" },
  ];
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = () => {
    console.log("selected");
  };

  let renderOptions = () => {
    return filteredOptions.map((option, index) => {
      return (
        <option key={index} value={option.value}>
          {option.option}
        </option>
      );
    });
  };
  return (
    <div>
      <input type="text" name="example" list="exampleList" />
      <datalist onChange={handleSelect} onSelect={handleSelect} id="exampleList">
        {renderOptions()}
      </datalist>
    </div>
  );
}
