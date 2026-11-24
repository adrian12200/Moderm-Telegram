import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDF7V8DViMFQCCknoAdDu3VXdTAbEIDtHs",
  authDomain: "modern-telegram-69b3a.firebaseapp.com",
  projectId: "modern-telegram-69b3a",
  storageBucket: "modern-telegram-69b3a.firebasestorage.app",
  messagingSenderId: "738784028969",
  appId: "1:738784028969:web:87af60c35c123f4c21ef38",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);