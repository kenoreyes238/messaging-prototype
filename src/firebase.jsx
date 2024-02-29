import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDFx6UsCCCGTOztCRJfwMOuws5zNtevqLc",
    authDomain: "messaging-prototype-practice.firebaseapp.com",
    projectId: "messaging-prototype-practice",
    storageBucket: "messaging-prototype-practice.appspot.com",
    messagingSenderId: "964836622734",
    appId: "1:964836622734:web:a5bbd368d558e831c6a4df",
    measurementId: "G-4Y54HFMZ68"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
// export const GoogleAuthProvider = new GoogleAuthProvider;
