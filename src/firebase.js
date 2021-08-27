import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOA5YQxj8Vn7ofXtqeujYyZeZ2Y14mPTQ",
  authDomain: "builderres-c76af.firebaseapp.com",
  projectId: "builderres-c76af",
  storageBucket: "builderres-c76af.appspot.com",
  messagingSenderId: "602582506896",
  appId: "1:602582506896:web:ae73948206de84dd432715"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
