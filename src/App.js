import "./css/index.css";

import { Routes, Route } from "react-router-dom";

import Homepage from "./container/pages/Homepage";
import Payment from "./container/pages/Payment";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
