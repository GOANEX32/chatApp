// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtznu-qdIRPVk1_p1LbWJadyqSfpgwqto",
  authDomain: "chatapp-94a8b.firebaseapp.com",
  projectId: "chatapp-94a8b",
  storageBucket: "chatapp-94a8b.appspot.com",
  messagingSenderId: "519211531456",
  appId: "1:519211531456:web:ee26b737a36bda85940125"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)