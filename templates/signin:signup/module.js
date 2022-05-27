import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAM7RuNWStI1JrwRvOYS_r2nq7_G_FqoDo",
    authDomain: "slipstream-62b14.firebaseapp.com",
    projectId: "slipstream-62b14",
    storageBucket: "slipstream-62b14.appspot.com",
    messagingSenderId: "765628362934",
    appId: "1:765628362934:web:b4568e4d48741ec17fb617",
    measurementId: "G-S4GSCS0GK6"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

