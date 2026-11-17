import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBUnCzLbflld7ghgctjdUOQFpCc6AGz8jA",
  authDomain: "vanguard-mark.firebaseapp.com",
  projectId: "vanguard-mark",
  storageBucket: "vanguard-mark.firebasestorage.app",
  messagingSenderId: "559500853316",
  appId: "1:559500853316:web:28ee5109734c5aa1303c11"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
};
