import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { db } from "../firebase";

// 讀取使用者任務
export async function getUserTasks(userId) {
  try {
    const tasks = [];
    const q = query(collection(db, "users", userId, "tasks"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      tasks.push({ id: doc.id, ...doc.data() });
    });
    return tasks;
  } catch (error) {
    console.error("讀取任務錯誤:", error);
    return [];
  }
}

// 讀取完成任務紀錄
export async function getTaskRecords(userId) {
  try {
    const records = [];
    const q = query(
      collection(db, "users", userId, "taskRecords"),
      orderBy("completedAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      records.push({ id: doc.id, ...doc.data() });
    });
    return records;
  } catch (error) {
    console.error("讀取完成紀錄錯誤:", error);
    return [];
  }
}
