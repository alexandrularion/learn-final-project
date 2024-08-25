// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-devjobs-app.firebaseapp.com",
  projectId: "react-devjobs-app",
  storageBucket: "react-devjobs-app.appspot.com",
  messagingSenderId: "465781070273",
  appId: "1:465781070273:web:aa77df92410d0e1a9bf740",
  measurementId: "G-JMXC7T4EHT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDatabase = getFirestore(app);

export { firestoreDatabase };
