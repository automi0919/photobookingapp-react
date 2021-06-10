import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { LoginForm } from '../../components/PhotographerSide/Login/LoginForm'
import './styles.css'

export function Login() {

    let history = useHistory();

    useEffect(() => {

        let authToken = window.localStorage.getItem('token');

        if (authToken) {
            history.push('dashboard')
        }
    })

    return (
        <div className="login-wrapper">
            <h1>Login Below</h1>
            <h3>Not a user? <a className="signup-link" href="/signup">Create your account today!</a></h3>
            <LoginForm />
        </div>
    )
};