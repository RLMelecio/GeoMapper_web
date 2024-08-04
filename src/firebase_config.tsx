import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAemi9enHfC_GEG7ZAnQZiXsyzmZrMZoNI",
  authDomain: "geomapper-d2b26.firebaseapp.com",
  projectId: "geomapper-d2b26",
  storageBucket: "geomapper-d2b26.appspot.com",
  messagingSenderId: "246358053582",
  appId: "1:246358053582:web:f9bfbeee8c0189d7b6369f"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const db_auth = getAuth(app);

export {db_auth, db}
