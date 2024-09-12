// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeT-J1mhGUVClehur4OhS6e-QXYejxATc",
  authDomain: "new-portfolio-f69d7.firebaseapp.com",
  projectId: "new-portfolio-f69d7",
  storageBucket: "new-portfolio-f69d7.appspot.com",
  messagingSenderId: "637210393309",
  appId: "1:637210393309:web:77bb6069bc03dc2315f934",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
