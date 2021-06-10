import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { SignUpForm } from '../../components/PhotographerSide/SignupForm/SignUpForm';
import "./styles.css"

export function Signup() {

    let history = useHistory();

    const [newUser, setNewUser] = useState({});

    useEffect(() => {

        let authToken = window.localStorage.getItem('token');

        if (authToken) {
            history.push('dashboard')
        }
    })

    return (
        <div className="signup-wrapper">
            <h1>Create An Account</h1>
            <h3>Already a user? <a className="signup-link" href="/login">Click here to log in!</a></h3>
            <SignUpForm newUser={newUser} setNewUser={setNewUser} />
        </div>
    )
};