import React from "react";

function QuoteDisplay({ quote }) {
  return (
    <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <h3>今日語錄</h3>
      <p>{quote}</p>
    </div>
  );
}

export default QuoteDisplay;
