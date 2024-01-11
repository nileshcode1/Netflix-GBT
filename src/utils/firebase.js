// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn3Oc9Dwfp9dGXPg-zJPzZGugcO2DcSBY",
  authDomain: "netflix-gpt-163d9.firebaseapp.com",
  projectId: "netflix-gpt-163d9",
  storageBucket: "netflix-gpt-163d9.appspot.com",
  messagingSenderId: "628963867285",
  appId: "1:628963867285:web:79db8b9b66ecf01d2ef99c",
  measurementId: "G-B5LFWZCNVD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
