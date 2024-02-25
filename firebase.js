// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0X1SLcI_lid-NAPLJIIc6eO4Rf-V8gzI",
  authDomain: "hackbeanpot-cl.firebaseapp.com",
  projectId: "hackbeanpot-cl",
  storageBucket: "hackbeanpot-cl.appspot.com",
  messagingSenderId: "206122799554",
  appId: "1:206122799554:web:6fbda6ed4371abe6d9865b",
  measurementId: "G-TS733X55F7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);