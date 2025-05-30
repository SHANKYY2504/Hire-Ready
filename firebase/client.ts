// Import the functions you need from the SDKs you need
import { initializeApp,getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAB3FXKFXjM_BWcaeHpbhskRIg1ye2aVQ",
  authDomain: "hireready-43eea.firebaseapp.com",
  projectId: "hireready-43eea",
  storageBucket: "hireready-43eea.firebasestorage.app",
  messagingSenderId: "943362547986",
  appId: "1:943362547986:web:6d4cf93775a9f4ee7f93cb",
  measurementId: "G-08RXR0Z8ZF"
};

// Initialize Firebase
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);