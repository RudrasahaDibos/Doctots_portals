// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:env.process.REACT_API_apiKey,
  authDomain:env.process.REACT_API_authDomain,
  projectId:env.process.REACT_API_projectId,
  storageBucket:env.process.REACT_API_storageBucket,
  messagingSenderId:env.process.REACT_API_messagingSenderId,
  appId:env.process.REACT_API_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;