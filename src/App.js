import "./css/index.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Homepage from "./container/pages/Homepage";
import Payment from "./container/pages/Payment";
import AddLive from "./components/Live/AddLive";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Routes>
        <Route path="/payment" element={<Payment />} />
        <Route path="/addlive" element={<AddLive />} />
      </Routes>
    </div>
  );
}

export default App;
