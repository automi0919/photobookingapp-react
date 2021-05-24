import React from 'react';
import { SignUpForm } from '../../components/SignupForm/SignUpForm';
import "./styles.css"

export function Signup() {
    return (
        <div className="signup-wrapper">
            <h1>Create An Account</h1>
            <SignUpForm />
        </div>
    )
};