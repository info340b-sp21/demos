import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import { Button } from 'reactstrap';

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  // signInSuccessUrl: '/signedIn',

  // We will display Google and Facebook as auth providers.
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true
    },
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  credentialHelper: 'none',
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },

};

export default function App(props) {

  const [errorMessage, setErrorMessage] = useState(undefined);
  const [user, setUser] = useState(undefined);

  // auth state event listener
  // we're listening for authentication state changes (user logged in, out)
  // need to make sure that we the component is loaded before, so we do this with an effect hook 

  useEffect(() => {   //run after component loads
    //listen for changes to the authstate (logged in or not)
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        console.log("logged in as " + firebaseUser.displayName);
        setUser(firebaseUser);
      }
      else { //not defined
        console.log("logged out");
        setUser(null);
      }
      // //auth state has changed
      // console.log("auth state has changed!");
    })
  })

  // //A callback function for registering new users
  // const handleSignUp = (email, password, handle, avatar) => {
  //     setErrorMessage(null); //clear any old errors
  // }

  // //A callback function for logging in existing users
  // const handleSignIn = (email, password) => {
  //     setErrorMessage(null); //clear any old errors
  // }

  //A callback function for logging out the current user
  const handleSignOut = () => {
    setErrorMessage(null); //clear any old errors
    firebase.auth().signOut();
  }

  // firebase authenticator
  // let theAuthenticator = firebase.auth();

  let content = null; //content to render

  if (!user) { //if logged out, show signup form
    content = (
      <div className="container">
        <h1>Sign Up</h1>
        {/* <SignUpForm errorMessage={errorMessage} user={user} /> */}
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
  else { //if logged in, show welcome message
    console.log("else")
    console.log(user);
    content = (
      <div>
        <WelcomeHeader user={user}>

          {/* log out button is child element */}
          {user && <Button color="danger" onClick={handleSignOut}>
            Log Out {user.displayName}
          </Button>
          }
        </WelcomeHeader>

      </div >
    );
    console.log(user);
  }

  return (
    <div>
      {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
      {content}
    </div>
  )
}


function WelcomeHeader(props) {
  return (
    <div>
      <h1> Welcome {props.user.displayName}!
      {' '}
        <img className="avatar" src={props.user.photo} /></h1>
      {props.children} {/* for button */}

    </div>
  );
}


function SignUpForm(props) {
  const [errorMessage, setErrorMessage] = useState(props.errorMessage);
  const [user, setUser] = useState(props.user);

  return (
    <div className="container">

      {/* Only included if first clause is true */}
      {errorMessage &&
        <p className="alert alert-danger">{errorMessage}</p>
      }

      {user &&
        <div className="alert alert-success"><h3>Logged in as {"this.state.user.displayName"}</h3></div>
      }

      <div className="form-group">
        <label>Email:</label>
        <input className="form-control"
          name="email"
        />
      </div>

      <div className="form-group">
        <label>Password:</label>
        <input type="password" className="form-control"
          name="password"
        />
      </div>

      <div className="form-group">
        <label>Username:</label>
        <input className="form-control"
          name="username"
        />
      </div>

      <div className="form-group mb-5">
        <button className="btn btn-primary mr-2" >
          Sign Up
          </button>
        <button className="btn btn-success mr-2" >
          Sign In
          </button>
        <button className="btn btn-warning mr-2" >
          Sign Out
          </button>
      </div>
    </div>
  );
}