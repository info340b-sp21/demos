import React from 'react';
import ReactDOM from 'react-dom';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import 'bootstrap/dist/css/bootstrap.css'; //bootstrap (bundled)
import './style.css';
import App from './App';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAZO4P_as180AtluHAR9dR3FrQkGFj9Hns",
  authDomain: "info340b-sp21.firebaseapp.com",
  databaseURL: "https://info340b-sp21-default-rtdb.firebaseio.com",
  projectId: "info340b-sp21",
  storageBucket: "info340b-sp21.appspot.com",
  messagingSenderId: "515771084358",
  appId: "1:515771084358:web:e4b5d6c50cfa6dc47de447"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));