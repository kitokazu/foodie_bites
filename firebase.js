// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk-t4X4q49Ks3h4FvTwC9GYDv7vfysKcQ",
  authDomain: "styleshare-842af.firebaseapp.com",
  projectId: "styleshare-842af",
  storageBucket: "styleshare-842af.appspot.com",
  messagingSenderId: "940051508309",
  appId: "1:940051508309:web:45fdd8dee872f8f761f8dc",
  measurementId: "G-BNL7ZXNNNE"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const analytics = getAnalytics(app);

export { app, db, storage, analytics };