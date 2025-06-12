// src/components/DailyQuote.jsx
import React, { useState, useEffect } from "react";
import quotes from "../data/quotes";
import SaveQuoteButton from "./SaveQuoteButton";

function DailyQuote() {
  const [todayQuote, setTodayQuote] = useState("");

  useEffect(() => {
    // 依當天日期取語錄，保持每日變換
    const dayOfYear = Math.floor(
      (new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000
    );
    const index = dayOfYear % quotes.length;
    setTodayQuote(quotes[index]);
  }, []);

  return (
    <div style={{ padding: 20, border: "1px solid #ccc", borderRadius: 10, maxWidth: 500 }}>
      <h2>每日一句自我激勵語錄</h2>
      <p style={{ fontStyle: "italic", fontSize: 18, marginBottom: 20 }}>{todayQuote}</p>
      <SaveQuoteButton quote={todayQuote} />
    </div>
  );
}

export default DailyQuote;
