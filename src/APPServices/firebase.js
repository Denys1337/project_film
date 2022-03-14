import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCP4IH33BQnLWLwwizcsQJyTqktcQ4keIk",
  authDomain: "filmoteka-48a51.firebaseapp.com",
  databaseURL: "https://filmoteka-48a51.firebaseapp.com",
  projectId: "filmoteka-48a51",
  storageBucket: "filmoteka-48a51.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID",
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);