// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUCOeVaMJokRgeTMo8nHF3JsbMKdVVpBM",
  authDomain: "doctors-portals-2a793.firebaseapp.com",
  projectId: "doctors-portals-2a793",
  storageBucket: "doctors-portals-2a793.appspot.com",
  messagingSenderId: "317301001621",
  appId: "1:317301001621:web:1b0337cc916e494f1bfa9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;