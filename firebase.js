// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import firebase from "./firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDS4ugGcp4-q5WtQu9xXN0kNNxY8zJOr18",
    authDomain: "clone-b9ad7.firebaseapp.com",
    databaseURL: "https://amazon-clone.firebaseio.com",
    projectId: "clone-b9ad7",
    storageBucket: "clone-b9ad7.appspot.com",
    messagingSenderId: "178890060409",
    appId: "1:178890060409:web:1b4cdeb75c4733f55e1aa8",
    measurementId: "G-7P313KVK4E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
export { db, auth };