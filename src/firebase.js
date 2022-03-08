// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh5Su-Lw3i8X4VjNi2ib8sZTygrgCHsIs",
  authDomain: "crudregister-49d2a.firebaseapp.com",
  projectId: "crudregister-49d2a",
  storageBucket: "crudregister-49d2a.appspot.com",
  messagingSenderId: "97228285691",
  appId: "1:97228285691:web:f639679a21ecfc1678725e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
//const db = getDatabase(app)

export default db;