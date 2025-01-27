// app/components/context/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD9CydI-g5NTkgmetYfiqjkZitDOaxWL_4",
  authDomain: "base-de-prueba-11f78.firebaseapp.com",
  projectId: "base-de-prueba-11f78",
  storageBucket: "base-de-prueba-11f78.appspot.com",
  messagingSenderId: "57053379420",
  appId: "1:657053379420:web:a37d8edd060f8a94ef2f99",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
