// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzm7fiHxcEUqGsDd2FzMlthArOeJUM-lM",
  authDomain: "jhontraktor.firebaseapp.com",
  projectId: "jhontraktor",
  storageBucket: "jhontraktor.firebasestorage.app",
  messagingSenderId: "667121759203",
  appId: "1:667121759203:web:85569e8cec6571348fe6d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
