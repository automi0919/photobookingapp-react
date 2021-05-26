import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import UserContext from "../../utils/UserContext";
import './styles.css'
import API from "../../utils/API";

export function LoginForm() {

    let history = useHistory();

    const { userEmail, isAuthenticated, updateUser } = useContext(UserContext);

    const [userLoginData, setUserLoginData] = useState({
        email: '',
        password: '',
        error: ''
    })

    const handleChange = (field, value) => {
        setUserLoginData(prevState => {
            return {
                ...prevState,
                [field]: value
            }
        })
    }

    const handleLogin = () => {
        updateUser(userLoginData.email, true);
        history.push('/dashboard');

    }

    const handleSubmit = () => {
        API.loginUser(userLoginData)
            .then(res => handleLogin())
            .catch(err => console.log(err))
        // If there are errors, I need to manipulate the DOM to reflect those.
    }

    return (
        <div className="LoginForm-wrapper">
            <form className="login-form-form">
                <input onChange={(e) => handleChange("email", e.target.value)} type="text" placeholder="Username/Email" />
                <input onChange={(e) => handleChange("password", e.target.value)} type="password" placeholder="Password" />
            </form>
            <button onClick={handleSubmit}>Log In</button>
            {/* <button onClick={() => onClick("isAuthenticated", true)}>Authenticate</button> */}
        </div>
    )
}