import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC1GBCibYJTjCRY5cI5s9glLV41W_d4o5g",
    authDomain: "chat-cec52.firebaseapp.com",
    projectId: "chat-cec52",
    storageBucket: "chat-cec52.appspot.com",
    messagingSenderId: "615381176010",
    appId: "1:615381176010:web:db249a0a7e0ceb13712e33",
    measurementId: "G-2JMSK6DXQ8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

export default app