import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCNc9Dz9b0XjYbSFMGu76M2wqwUfhpE_l0",
  authDomain: "app-firebase-learn-389a4.firebaseapp.com",
  projectId: "app-firebase-learn-389a4",
  storageBucket: "app-firebase-learn-389a4.firebasestorage.app",
  messagingSenderId: "1086691095519",
  appId: "1:1086691095519:web:ae27bc9c746f9b99b54a6a"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore (app); 