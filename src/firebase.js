// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiEUrX8Iuw9_W5neIClzU12Z-FZBb5rJQ",
  authDomain: "nguyenvietanh94-portfolio.firebaseapp.com",
  projectId: "nguyenvietanh94-portfolio",
  storageBucket: "nguyenvietanh94-portfolio.appspot.com",
  messagingSenderId: "1033709565168",
  appId: "1:1033709565168:web:76027e2b999e0fa7fd7e35",
  measurementId: "G-LGYSX3F5X1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);