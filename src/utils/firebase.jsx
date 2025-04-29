
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzeymoLkx59J-9DaMAUK3n5-HnjwYg2DY",
  authDomain: "netflixgpt-d2af0.firebaseapp.com",
  projectId: "netflixgpt-d2af0",
  storageBucket: "netflixgpt-d2af0.firebasestorage.app",
  messagingSenderId: "105020320035",
  appId: "1:105020320035:web:7fe23b3402e4d751abc496",
  measurementId: "G-H4NZ51JKV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);