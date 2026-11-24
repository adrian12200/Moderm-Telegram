import { db } from "./firebase-config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

try {
  const ref = await addDoc(collection(db, "test"), { hello: "world", time: Date.now() });
  console.log("Firestore connected! Doc ID:", ref.id);
} catch (error) {
  console.error("Firestore error:", error.code, error.message);
}