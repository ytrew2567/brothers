import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function TaskList() {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log("目前使用者：", user);  // 這行會在 Console 印出 user
  }, [user]);

  if (!user) return <div>請先登入</div>;

  return (
    <div>
      <h2>任務清單</h2>
      {tasks.length === 0 ? (
        <p>任務空空的</p>
      ) : (
        tasks.map((task) => <div key={task.id}>{task.title}</div>)
      )}
    </div>
  );
}

export default TaskList;
