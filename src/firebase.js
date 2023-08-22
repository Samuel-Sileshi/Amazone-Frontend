import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	  apiKey: "AIzaSyAQjQ31jMgae0o27J1_UsXcXP8RvxyABuw",
    authDomain: "fir-a8407.firebaseapp.com",
    projectId: "fir-a8407",
    storageBucket: "fir-a8407.appspot.com",
    messagingSenderId: "65856204699",
    appId: "1:65856204699:web:ed7512a8408110dcb5bb3e",
    measurementId: "G-BZBGHV5Q8F"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const db = app.firestore();

export { auth, db };

