// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCLK_vVfO52Strx-fmGd5CJ3rPI-Hux6cY",
  authDomain: "web-kelas-46459.firebaseapp.com",
  projectId: "web-kelas-46459",
  storageBucket: "web-kelas-46459.appspot.com",
  messagingSenderId: "357944911888",
  appId: "1:357944911888:web:91c7d12f9db214749d4295",
  measurementId: "G-GPXNV2D1EP"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();