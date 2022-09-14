import React from "react";
import MultiSelect from "./MultiSelect/MultiSelect";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
export default function Test({ InsideTest }) {
  return (
    <div>
      <MultiSelect />
    </div>
  );
}
