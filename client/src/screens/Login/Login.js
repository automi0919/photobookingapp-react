import React from 'react';
import { LoginForm } from '../../components/Login/LoginForm'
import './styles.css'

export function Login() {
    return (
        <div className="login-wrapper">
            <h1>Login Below</h1>
            <h3>Not a user? Create your account today!</h3>
            <LoginForm />
        </div>
    )
};