// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernproject-realestate.firebaseapp.com",
  projectId: "mernproject-realestate",
  storageBucket: "mernproject-realestate.firebasestorage.app",
  messagingSenderId: "918285445018",
  appId: "1:918285445018:web:823380f5647e3b6a2a3c23"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);