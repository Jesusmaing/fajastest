// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7767YSgKZfsKx9Bxb9PcRkhzdXJX7Qac",
  authDomain: "ope-website-392721.firebaseapp.com",
  projectId: "ope-website-392721",
  storageBucket: "ope-website-392721.appspot.com",
  messagingSenderId: "250736301284",
  appId: "1:250736301284:web:f3efabe2d44390554108f1",
  measurementId: "G-BGW81H2806"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//initialize firestore
export const db = getFirestore(app);

export const functions = getFunctions(app); // Export the functions object

export const getStripeURL = httpsCallable(functions, "stripeCheckout");
