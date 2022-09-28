// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoo8WG1Wob-CG9XKU78vpXnEODZco2XUg",
  authDomain: "doctors-portals-84130.firebaseapp.com",
  projectId: "doctors-portals-84130",
  storageBucket: "doctors-portals-84130.appspot.com",
  messagingSenderId: "974126339025",
  appId: "1:974126339025:web:b91250f571db4a1db186f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;