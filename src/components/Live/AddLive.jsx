import React from "react";
import { useRef, useEffect } from "react";

export default function AddLive() {
  let elref = useRef([]);
  let a;
  useEffect(() => {
    console.log("ref:", elref);
    console.log("a:", a);
    inputRefs();
  }, []);
  let handleClick = () => {
    elref.current[1].focus();
  };

  let inputRefs = () => {
    [1, 2, 3].map((item, i) => {
      return (
        <>
          <input type="text" ref={(el) => (elref.current[i] = el)} name="firstname" />
        </>
      );
    });
  };
  return (
    <div>
      <input type="text" name="firstname" />
      <button onClick={handleClick}>click</button>;
    </div>
  );
}
