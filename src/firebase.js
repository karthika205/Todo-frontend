// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUKVASU52pf6uz3XmoNvJz5K6eWFPXu14",
  authDomain: "todo-task-app-a5658.firebaseapp.com",
  projectId: "todo-task-app-a5658",
  storageBucket: "todo-task-app-a5658.appspot.com",
  messagingSenderId: "841757297932",
  appId: "1:841757297932:web:c4eb62d160b6c64c5e8d29",
  measurementId: "G-DJXHE5WFRN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
