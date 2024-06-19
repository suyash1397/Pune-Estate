// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "pune-estate.firebaseapp.com",
    projectId: "pune-estate",
    storageBucket: "pune-estate.appspot.com",
    messagingSenderId: "62084594115",
    appId: "1:62084594115:web:3d0370daa6553e11b62576"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);