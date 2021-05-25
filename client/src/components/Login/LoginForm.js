import React from 'react'
import './styles.css'
import API from "../../utils/API";

const handleSubmit = () => {
    API.loginUser()
        .then(res => console.log(res))
}

export function LoginForm({ userData, seUserData }) {
    console.log(userData);
    return (
        <div className="LoginForm-wrapper">
            <form className="login-form-form">
                <input type="text" placeholder="Username/Email" />
                <input type="password" placeholder="Password" />
            </form>
            <button onSubmit={handleSubmit}>Log In</button>
        </div>
    )
}