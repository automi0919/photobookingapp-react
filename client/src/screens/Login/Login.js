import React from 'react';
import { LoginForm } from '../../components/Login/LoginForm'
import './styles.css'

export function Login() {
    return (
        <div className="login-wrapper">
            <h1>Login Below</h1>
            <LoginForm />
        </div>
    )
};