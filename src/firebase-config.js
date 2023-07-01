// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM3LbJOwIUbMljNMpPignKT5hCLc87tu0",
  authDomain: "chatapp-8c1a1.firebaseapp.com",
  projectId: "chatapp-8c1a1",
  storageBucket: "chatapp-8c1a1.appspot.com",
  messagingSenderId: "18303204093",
  appId: "1:18303204093:web:9988bd7b2770b2eeda1c94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
