import React from 'react'
import './styles.css'

export function LoginForm() {
    return (
        <div className="LoginForm-wrapper">
            <form className="login-form-form">
                <input type="text" placeholder="Username/Email" />
                <input type="password" placeholder="Password" />
            </form>
            <button>Submit</button>
        </div>
    )
}