import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmY4y0qd2fLJzGNwAnfMbbQSQuvZazNgo",
  authDomain: "memento-eabb4.firebaseapp.com",
  projectId: "memento-eabb4",
  storageBucket: "memento-eabb4.appspot.com",
  messagingSenderId: "215184988934",
  appId: "1:215184988934:web:c00145ab4b12a8fbd7dc87",
  measurementId: "G-F1VY3PDZVY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
