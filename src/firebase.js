import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBVPucKQ9Ygl-vCklEixwtpz6vE9TyeBoQ",
  authDomain: "productsproject-5a53f.firebaseapp.com",
  projectId: "productsproject-5a53f",
  storageBucket: "productsproject-5a53f.firebasestorage.app",
  messagingSenderId: "957401796793",
  appId: "1:957401796793:web:fa869d1396c2ee3091cb68",
  databaseURL: 'https://productsproject-5a53f-default-rtdb.europe-west1.firebasedatabase.app/',
};

const App = initializeApp(firebaseConfig);

export const db = getDatabase(App)