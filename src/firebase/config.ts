// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4A8l3RH-96Q7kVlkRP1so6IXDgJXbQ0k",
    authDomain: "react-cursos-59670.firebaseapp.com",
    projectId: "react-cursos-59670",
    storageBucket: "react-cursos-59670.appspot.com",
    messagingSenderId: "1055628615968",
    appId: "1:1055628615968:web:c9b7023ff82e0b7c737745"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
