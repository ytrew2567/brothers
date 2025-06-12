import { db } from "./firebase";
import { collection, query, where, getDocs, updateDoc, doc, addDoc, orderBy, serverTimestamp } from "firebase/firestore";

// 取得使用者任務列表（你可以改成你任務資料結構）
export async function getUserTasks(userId) {
  const tasks = [];
  const q = query(collection(db, "users", userId, "tasks"));
  const snapshot = await getDocs(q);
  snapshot.forEach(doc => {
    tasks.push({ id: doc.id, ...doc.data() });
  });
  return tasks;
}

// 標記任務完成並新增完成紀錄
export async function completeTask(userId, taskId, taskTitle) {
  const taskRef = doc(db, "users", userId, "tasks", taskId);
  await updateDoc(taskRef, { completed: true, completedAt: serverTimestamp() });
  
  const recordRef = collection(db, "users", userId, "taskRecords");
  await addDoc(recordRef, { taskId, title: taskTitle, completedAt: serverTimestamp() });
}

// 取得完成紀錄（依時間排序）
export async function getTaskRecords(userId) {
  const records = [];
  const q = query(collection(db, "users", userId, "taskRecords"), orderBy("completedAt", "desc"));
  const snapshot = await getDocs(q);
  snapshot.forEach(doc => {
    records.push({ id: doc.id, ...doc.data() });
  });
  return records;
}
