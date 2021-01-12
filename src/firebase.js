// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAnUmFXMmL-xMfDSDbjU73vx9ZpX_FSywo",
    authDomain: "todoapp-ad120.firebaseapp.com",
    projectId: "todoapp-ad120",
    storageBucket: "todoapp-ad120.appspot.com",
    messagingSenderId: "22362683575",
    appId: "1:22362683575:web:001b5d5a6e2e60b47c7532",
    measurementId: "G-H1H6GLJDRK"
});

const db = firebaseApp.firestore();

export default db;