// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFSbwnngx8tsOJokMg3_SZHwPXyQWbNT4",
  authDomain: "thecoffestore-4daf9.firebaseapp.com",
  projectId: "thecoffestore-4daf9",
  storageBucket: "thecoffestore-4daf9.appspot.com",
  messagingSenderId: "978379707582",
  appId: "1:978379707582:web:4b580710a3ed2d41c5faef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);