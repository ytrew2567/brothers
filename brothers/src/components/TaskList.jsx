import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getUserTasks, completeTask } from "../firebaseFunctions";

export default function TaskList() {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    async function fetchTasks() {
      const data = await getUserTasks(user.uid);
      setTasks(data);
      setLoading(false);
    }
    fetchTasks();
  }, [user]);

  async function handleComplete(taskId, taskTitle) {
    await completeTask(user.uid, taskId, taskTitle);
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, completed: true } : t))
    );
  }

  if (loading) return <div>載入任務中...</div>;
  if (!tasks.length) return <div>目前沒有任務</div>;

  return (
    <div>
      <h2>任務清單</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.completed ? "已完成" : "未完成"}
            {!task.completed && (
              <button onClick={() => handleComplete(task.id, task.title)}>
                完成任務
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
