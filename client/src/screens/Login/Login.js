import React from 'react';
import { LoginForm } from '../../components/Login/LoginForm'
import './styles.css'

export function Login() {
    return (
        <div className="login-wrapper">
            <h1>Login Below</h1>
            <h3>Not a user? <a className="signup-link" href="/signup">Create your account today!</a></h3>
            <LoginForm />
        </div>
    )
};