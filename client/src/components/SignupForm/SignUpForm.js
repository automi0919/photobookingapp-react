import React from 'react'
import './styles.css'

export function SignUpForm() {
    return (
        <div className="SignUpForm-wrapper">
            <form className="signup-form-form">
                <input type="text" placeholder="Business Name" />
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Username/Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
            </form>
            <button>Create Account</button>
        </div>
    )
}