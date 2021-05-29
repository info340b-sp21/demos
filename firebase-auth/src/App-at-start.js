import React, { useState, useEffect } from 'react';


export default function App(props) {

    const [errorMessage, setErrorMessage] = useState(undefined);
    const [user, setUser] = useState(undefined);

    //A callback function for registering new users
    const handleSignUp = (email, password, handle, avatar) => {
        setErrorMessage(null); //clear any old errors
    }

    //A callback function for logging in existing users
    const handleSignIn = (email, password) => {
        setErrorMessage(null); //clear any old errors
    }

    //A callback function for logging out the current user
    const handleSignOut = () => {
        setErrorMessage(null); //clear any old errors
    }

    let content = null; //content to render

    if (!user) { //if logged out, show signup form
        content = (
            <div className="container">
                <h1>Sign Up</h1>
                <SignUpForm errorMessage={errorMessage} user={user} />
            </div>
        );
    }
    else { //if logged in, show welcome message
        content = (
            <div>
                <WelcomeHeader user={user}>
                    {/* log out button is child element */}
                    {user &&
                        <button className="btn btn-warning" on Click={handleSignOut}>
                            Log Out {user.displayName}
                        </button>
                    }
                </WelcomeHeader>
            </div >
        );
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
            <p> {props.user}</p>
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