import React, { useState } from "react";
import UserContext from "../../utils/UserContext";
import './styles.css'
import API from "../../utils/API";

export function LoginForm() {

    const [userData, setUserData] = useState({
        email: '',
        password: '',
        authenticated: false
    })

    const handleChange = (field, value) => {
        setUserData(prevState => {
            return {
                ...prevState,
                [field]: value
            }
        })
    }

    const handleSubmit = () => {
        API.loginUser(userData)
            .then(res => console.log(res))
    }

    console.log(userData);

    return (
        <div className="LoginForm-wrapper">
            <form className="login-form-form">
                <input onChange={(e) => handleChange("email", e.target.value)} type="text" placeholder="Username/Email" />
                <input onChange={(e) => handleChange("password", e.target.value)} type="password" placeholder="Password" />
            </form>
            <button onClick={handleSubmit}>Log In</button>
        </div>
    )
}