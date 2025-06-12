// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMebgaDChoUFIPNKzxQ7o56tUUFFKl0JI",
  authDomain: "brothers-2a9c0.firebaseapp.com",
  projectId: "brothers-2a9c0",
  storageBucket: "brothers-2a9c0.firebasestorage.app",
  messagingSenderId: "876258054602",
  appId: "1:876258054602:web:72fd466fe9214a0c703f33",
  measurementId: "G-ELG4VPZ0QW"
}; 	
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
