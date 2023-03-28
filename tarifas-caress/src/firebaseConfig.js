import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'


const firebaseConfig = {
  apiKey: "AIzaSyA2qOeQ5pEMEzjbs5jqdx9WGnsyOOcgE28",
  authDomain: "tarifascaress.firebaseapp.com",
  projectId: "tarifascaress",
  storageBucket: "tarifascaress.appspot.com",
  messagingSenderId: "613400982319",
  appId: "1:613400982319:web:92ab36704ee8338d3467da"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
export {auth,db};