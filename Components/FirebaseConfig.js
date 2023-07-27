// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries


// //Authentication
import { getAuth } from 'firebase/auth'
// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVzA1gafbvZ7H-2m0MriSWsVnAQi3qeLQ",
  authDomain: "fir-396d2.firebaseapp.com",
  projectId: "fir-396d2",
  storageBucket: "fir-396d2.appspot.com",
  messagingSenderId: "705839573199",
  appId: "1:705839573199:web:221e3aaa8b20153535afba",
  measurementId: "G-80VJY1VWJB"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
//Initialize Firebase Authenticaion and get a ref to the service
export const AUTH = getAuth(firebaseApp)