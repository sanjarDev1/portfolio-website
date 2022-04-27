import firebase from "firebase";
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCG7D-n76gQoQ1YxhnRTJX4szgWdARxga0",
  authDomain: "portfolio-website-10078.firebaseapp.com",
  projectId: "portfolio-website-10078",
  storageBucket: "portfolio-website-10078.appspot.com",
  messagingSenderId: "822617486332",
  appId: "1:822617486332:web:0d141c116bdf8a7455b879",
  measurementId: "G-ZRSTH3BWPR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;