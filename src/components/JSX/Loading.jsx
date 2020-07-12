import React, { useState } from "react";
import loading_1 from "../SVG/loading_1.svg";
import loading_2 from "../SVG/loading_2.svg";
import loading_3 from "../SVG/loading_3.svg";
export default function Loading() {
  const [loading, setLoading] = useState(loading_1);
  return (
    <div className="loadingScreen">
      <div className="loadingContainer">
        <img src={loading} alt="" />
      </div>
    </div>
  );
}
