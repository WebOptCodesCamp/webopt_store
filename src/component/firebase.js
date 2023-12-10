// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7fhHl7bwpOIKY_gTyh37uQ6KgmcSXIuo",
  authDomain: "webopt-42e8e.firebaseapp.com",
  projectId: "webopt-42e8e",
  storageBucket: "webopt-42e8e.appspot.com",
  messagingSenderId: "315085498523",
  appId: "1:315085498523:web:f98c58364abce1b46dbe3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);