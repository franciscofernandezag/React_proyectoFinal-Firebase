import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAgIvScFDoFGpPiNMc6CR-rjfLD89ybYVg",
  authDomain: "ebookstotal-d61dd.firebaseapp.com",
  projectId: "ebookstotal-d61dd",
  storageBucket: "ebookstotal-d61dd.appspot.com",
  messagingSenderId: "71386645436",
  appId: "1:71386645436:web:a743587578ec66b8baa1b9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
