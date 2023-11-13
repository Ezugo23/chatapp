// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbXngaITn2Gjt1NqwfUlrPsG2sKHgRa1Q",
  authDomain: "chatapp-3a279.firebaseapp.com",
  projectId: "chatapp-3a279",
  storageBucket: "chatapp-3a279.appspot.com",
  messagingSenderId: "82831271016",
  appId: "1:82831271016:web:3dc49289954be3047b47dd",
  measurementId: "G-DWGQMH9YYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);