import { auth, db } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  doc,
  setDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const form = document.getElementById("register-form");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  try {
    // 1. Create the auth account
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    const user = credential.user;

    // 2. Set the display name on the auth profile
    await updateProfile(user, { displayName: name });

    // 3. Save extra user data in Firestore, keyed by the user's uid
    await setDoc(doc(db, "users", user.uid), {
      name,
      email,
      createdAt: serverTimestamp(),
    });

    message.textContent = "Registered! Redirecting...";
    window.location.href = "dashboard.html";
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