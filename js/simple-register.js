import { db } from "./firebase-config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


const form = document.getElementById("register-form");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  try {
    const ref = await addDoc(collection(db, "users"), { 
        email: email, 
        name: name,
    });

    console.log("Firestore connected! Doc ID:", ref.id);
  } catch (error) {
    message.textContent = getErrorMessage(error.code);
  }
});

function getErrorMessage(code) {
  switch (code) {
    case "auth/email-already-in-use":
      return "That email is already registered.";
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/weak-password":
      return "Password must be at least 6 characters.";
    default:
      return "Something went wrong. Please try again.";
  }
}

// try {
//     const ref = await addDoc(collection(db, "users"), { email: "world", time: Date.now() });
//     console.log("Firestore connected! Doc ID:", ref.id);
// } catch (error) {
//     console.error("Firestore error:", error.code, error.message);
// }