// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpXP3yJgc5CLPJRYLrRHLxRStFrC81nN8",
  authDomain: "wheres-waldo-a7d26.firebaseapp.com",
  projectId: "wheres-waldo-a7d26",
  storageBucket: "wheres-waldo-a7d26.appspot.com",
  messagingSenderId: "648724755598",
  appId: "1:648724755598:web:0d3191e22d1acbe52f85df"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;