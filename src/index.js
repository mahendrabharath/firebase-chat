import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";
// https://colorhunt.co/palette/464660368b85b4b897f1e9e5
// const firebase = require("firebase");
// Required for side-effects
const firebaseConfig = {
  apiKey: "AIzaSyAn3dbtc6VJ7keVicMn1i5ez2s_Jt1qbbE",
  authDomain: "friendlyeats-c47ae.firebaseapp.com",
  projectId: "friendlyeats-c47ae",
  storageBucket: "friendlyeats-c47ae.appspot.com",
  messagingSenderId: "989542196587",
  appId: "1:989542196587:web:63896b071fdfab8d66982e",
  measurementId: "G-6LXZLGGTXT"
};
// firebase

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth().signInAnonymously().then((res) => console.log('Firebase signed in ', res))
// var db = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
