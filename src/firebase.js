import firebase from "firebase/app";
import "firebase/firestore";

// Cleared for github
const firebaseConfig = firebase.initializeApp({
   apiKey: "AIzaSyAzvO76uPibzqv6pHMJZmNuXMmIKulMlXg",
   authDomain: "calorie-tracker-app-7ea8f.firebaseapp.com",
   databaseURL: "https://calorie-tracker-app-7ea8f.firebaseio.com",
   projectId: "calorie-tracker-app-7ea8f",
   storageBucket: "calorie-tracker-app-7ea8f.appspot.com",
   messagingSenderId: "268996521484",
   appId: "1:268996521484:web:d20128b7635e02ebed0829",
   measurementId: "G-L2109SG409"
});

export { firebaseConfig as firebase };

/**
|--------------------------------------------------
| https://console.firebase.google.com/project/calorie-tracker-app-7ea8f/settings/general/web:ZDEzNWQ1YjAtM2NiYS00ZjM2LWFlMzYtYTNjYjc0ZGU3YWYy
|--------------------------------------------------
*/
