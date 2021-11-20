import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBEZ70DfqzA5H1kJwZ2fiwzwhgAQ99J58E",
    authDomain: "car-769f6.firebaseapp.com",
    databaseURL: "https://car-769f6-default-rtdb.firebaseio.com",
    projectId: "car-769f6",
    storageBucket: "car-769f6.appspot.com",
    messagingSenderId: "40402356113",
    appId: "1:40402356113:web:68452aa21777383138bc30"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


