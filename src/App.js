import "./css/index.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Homepage from "./container/pages/Homepage";
import Payment from "./container/pages/Payment";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
