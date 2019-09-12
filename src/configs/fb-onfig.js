import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAthQZUUdz_HSATmETokxjY7S2v2d4bHQY",
    authDomain: "marioplan-7f963.firebaseapp.com",
    databaseURL: "https://marioplan-7f963.firebaseio.com",
    projectId: "marioplan-7f963",
    storageBucket: "",
    messagingSenderId: "268433415723",
    appId: "1:268433415723:web:82a2b61a5f48bd2a3cd46e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;