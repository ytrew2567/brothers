// src/components/SaveQuoteButton.jsx
import React, { useState } from "react";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth } from "../firebase";

function SaveQuoteButton({ quote }) {
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  const saveQuote = async () => {
    if (!auth.currentUser) {
      alert("請先登入");
      return;
    }
    setLoading(true);
    try {
      const db = getFirestore();
      const userQuotesRef = collection(db, "userQuotes");
      await addDoc(userQuotesRef, {
        uid: auth.currentUser.uid,
        displayName: auth.currentUser.displayName,
        quote,
        createdAt: serverTimestamp(),
      });
      setSaved(true);
      alert("已成功紀錄今日語錄");
    } catch (error) {
      console.error("儲存語錄錯誤", error);
      alert("紀錄失敗，請稍後再試");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={saveQuote} disabled={loading || saved}>
      {saved ? "已紀錄" : loading ? "儲存中..." : "紀錄今日語錄"}
    </button>
  );
}

export default SaveQuoteButton;
