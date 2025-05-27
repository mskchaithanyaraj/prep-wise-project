import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp, getApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBeI4Q6KzN1WKroySFLRmtCYGd3Vutrf6U",
  authDomain: "acemock-18b7a.firebaseapp.com",
  projectId: "acemock-18b7a",
  storageBucket: "acemock-18b7a.firebasestorage.app",
  messagingSenderId: "760635987723",
  appId: "1:760635987723:web:e163bfce70ac416f71f40e",
  measurementId: "G-BZSCQBC5Q3",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
