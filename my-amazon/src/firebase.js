import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD1V3zyJEeHeS5lpPzuf52vZKrdTh5NN8E",
    authDomain: "my-e4355.firebaseapp.com",
    projectId: "my-e4355",
    storageBucket: "my-e4355.appspot.com",
    messagingSenderId: "431657140249",
    appId: "1:431657140249:web:0cbec9f260c15605bd6a88",
    measurementId: "G-SL56RL2FPQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };