import React, { useState, useEffect } from 'react';

import TaskApp from './Tasks';

import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
//Configure FirebaseUI (inside the component, public class field)
const uiConfig = {
  //which sign in values should we support?
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  //for external sign-in methods, use popup instead of redirect
  signInFlow: 'popup',
};

export default function App(props) {
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [user, setUser] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {   //run after component loads
    //listen for changes to the authstate (logged in or not)
    const authUnregisterFunction = firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        setIsLoading(false);
      }
      else { //not defined
        console.log("logged out");
        setUser(null);
        setIsLoading(false);
      }
    })
  }); //only run hook on first load

  const handleSignOut = () => {
    firebase.auth().signOut()
  }

  // Should I show a spinner?
  if (isLoading) {
    console.log("isloading");
    //render this stuff
    return (
      <div className="text-center">
        <i className="fa fa-spinner fa-spin fa-3x" aria-label="Connecting..."></i>
      </div>
    )
  }
  
    let content = null;
    if(!user) { //signed out
      content = (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      )
    } 
    else { //signed in
      content = (
        <div>
          <div className="alert alert-success">
            <h3>Logged in as {user.displayName}
              <button className="btn btn-warning float-right" onClick={handleSignOut}>
                Sign Out
              </button>
            </h3>
          </div>
          {/* <TaskApp /> */}
          <TaskApp fbuserkey={(user.email).replace(/[^a-zA-Z0-9]/g, "")} currentUser={user}/>
        </div>
      )
    }

    return (
      <div className="container">

        {/* Only included if first clause is true */}
        {errorMessage &&
          <p className="alert alert-danger">{errorMessage}</p>
        }

        {/* Show content based on user login state */}
        {content}

      </div>
    )
  
}