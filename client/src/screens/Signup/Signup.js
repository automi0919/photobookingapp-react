import React, { useState } from 'react';
import { SignUpForm } from '../../components/SignupForm/SignUpForm';
import "./styles.css"

export function Signup() {

    const [newUser, setNewUser ] = useState({});

    return (
        <div className="signup-wrapper">
            <h1>Create An Account</h1>
            <SignUpForm newUser={newUser} setNewUser={setNewUser} />
        </div>
    )
};