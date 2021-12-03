import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import 'firebase/compat/auth';
import  firbaseConf from "../env";

const firebaseConfig = {

    apiKey: firbaseConf.FIREBASE_API_KEY,
    authDomain:  firbaseConf.FIREBASE_AUTHDOMAIN,
    projectId: firbaseConf.FIREBASE_PROJECT_ID,
    storageBucket:  firbaseConf.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: firbaseConf.FIREBASE_MESSAGING_SENDER_ID,
    appId:  firbaseConf.FIREBASE_APP_ID,

};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const db = firebase.firestore();
