import React, { useState } from 'react';

const motivationalQuotes = [
  "你今天的努力，會讓未來的你感謝現在的自己。",
  "別怕慢，只怕站。持續前進就好。",
  "掌握當下，就是掌握人生。",
];

const initialTasks = [
  { id: 1, text: "寫下今天的目標", done: false },
  { id: 2, text: "靜心冥想 5 分鐘", done: false },
  { id: 3, text: "閱讀一篇啟發文章", done: false },
];

export default function TasksWithMotivation() {
  const [tasks, setTasks] = useState(initialTasks);
  const [showMotivation, setShowMotivation] = useState(false);
  const [currentQuote, setCurrentQuote] = useState('');

  function toggleTaskDone(id) {
    setTasks(tasks.map(t => {
      if (t.id === id) return { ...t, done: !t.done };
      return t;
    }));
  }

  function handleCompleteTasks() {
    // 只在所有任務完成時顯示激勵語錄
    const allDone = tasks.every(t => t.done);
    if (allDone) {
      // 隨機挑一則激勵語錄
      const quote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
      setCurrentQuote(quote);
      setShowMotivation(true);
    } else {
      alert("請先完成所有任務！");
    }
  }

  return (
    <div>
      <h2>任務清單</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <label style={{textDecoration: task.done ? 'line-through' : 'none'}}>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTaskDone(task.id)}
              /> {task.text}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleCompleteTasks}>完成任務</button>

      {/* 激勵語錄彈窗 */}
      {showMotivation && (
        <div style={{
          position: 'fixed', top:0, left:0, right:0, bottom:0,
          backgroundColor: 'rgba(0,0,0,0.5)', display:'flex', justifyContent:'center', alignItems:'center'
        }}>
          <div style={{
            backgroundColor: 'white', padding: '20px', borderRadius: '8px', maxWidth: '300px', textAlign: 'center'
          }}>
            <h3>恭喜完成任務！</h3>
            <p style={{fontStyle: 'italic'}}>{currentQuote}</p>
            <button onClick={() => setShowMotivation(false)}>關閉</button>
          </div>
        </div>
      )}
    </div>
  );
}
