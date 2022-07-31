import React from "react";

function Payment() {
  const handleForm = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <h1>Bill payment</h1>
      <h3>Pay bill with esewa:</h3>
      <div className="bill-details">
        <form>
          <label>anish</label>
          <input type="text" />
          <label>shrestha</label>
          <input type="text" />
          <input id="date" type="date" min="2022-07-28" max="2022-07-30" />
          <button type="submit" onClick={handleForm}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
