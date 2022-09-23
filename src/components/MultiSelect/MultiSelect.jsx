import React, { useState } from "react";

export default function MultiSelect() {
  const options = [
    { value: "something", option: "some" },
    { value: "anything", option: "sss" },
    { value: "nothing", option: "sossme" },
    { value: "something", option: "sossme" },
  ];
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (e) => {
    console.log("selected", e);
    console.log("sel");
  };

  let renderOptions = () => {
    return filteredOptions.map((option, index) => {
      return <option key={index} value={option.value} />;
    });
  };
  return (
    <div>
      <input onChange={handleSelect} type="text" name="example" list="exampleList" />
      <datalist id="exampleList">{renderOptions()}</datalist>
    </div>
  );
}
