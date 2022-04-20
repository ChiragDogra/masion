// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8uNbER84f2LMb1gY0_l407hhIvgfMLjs",
  authDomain: "masion-9b3ce.firebaseapp.com",
  projectId: "masion-9b3ce",
  storageBucket: "masion-9b3ce.appspot.com",
  messagingSenderId: "453348265792",
  appId: "1:453348265792:web:65c6e4124531dfad7834a5",
  measurementId: "G-WTS5SQJLTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);