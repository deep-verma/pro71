import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyCZrok56Md-_GWyq-CuaKTha6iyLK2xNAk",
  authDomain: "ride-5b72e.firebaseapp.com",
  projectId: "ride-5b72e",
  storageBucket: "ride-5b72e.appspot.com",
  messagingSenderId: "115477134406",
  appId: "1:115477134406:web:dbbd85a710454966e65e47"
};

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
