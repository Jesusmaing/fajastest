// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCOpfToba5Gqd7yrbA0BKAASEbtNsjedY",
  authDomain: "coding-solved.firebaseapp.com",
  databaseURL: "https://coding-solved-default-rtdb.firebaseio.com",
  projectId: "coding-solved",
  storageBucket: "coding-solved.appspot.com",
  messagingSenderId: "59093349347",
  appId: "1:59093349347:web:cbce226a4b62597cbe26d6",
  measurementId: "G-NJ76H5JKFL"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//initialize firestore
export const db = getFirestore(app);

export const functions = getFunctions(app); // Export the functions object

export const getStripeURL = httpsCallable(functions, "createCheckoutSessionOnCall");
