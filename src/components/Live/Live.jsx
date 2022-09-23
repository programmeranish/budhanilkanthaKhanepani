import React from "react";
import { useNavigate } from "react-router-dom";

export default function Live() {
  const navigate = useNavigate();
  return (
    <div>
      Live
      <button onClick={() => navigate("/addlive")}>Add live</button>
    </div>
  );
}
