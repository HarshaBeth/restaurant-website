
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFVl9Zj-eLrWUBg7_JBp597RaNpJlsKCU",
  authDomain: "gericht-restaurant-website.firebaseapp.com",
  projectId: "gericht-restaurant-website",
  storageBucket: "gericht-restaurant-website.appspot.com",
  messagingSenderId: "720998734239",
  appId: "1:720998734239:web:9eaa2b52267ebc941345aa"
};

// Initialize Firebase
const apps = getApps();
const app = apps.length === 0 ? initializeApp(firebaseConfig) : apps[0];
export const database = getFirestore(app);
