import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import UserContext from "../../utils/UserContext";
import './styles.css'
import API from "../../utils/API";

export function LoginForm() {

    let history = useHistory();

    const { userEmail, userId, isAuthenticated, updateUser } = useContext(UserContext);

    const [userLoginData, setUserLoginData] = useState({
        email: '',
        password: '',
        error: ''
    })

    const [errorState, setErrorState] = useState()

    const handleChange = (field, value) => {
        setUserLoginData(prevState => {
            return {
                ...prevState,
                [field]: value
            }
        })
    }

    const handleLogin = () => {
        updateUser(userLoginData.email, null, true);
        history.push('/dashboard');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        API.loginUser(userLoginData)
            .then(res => handleLogin())
            .catch(err => setErrorState(err))
        // .catch(err => console.log(err))

    }

    console.log(errorState);

    return (
        <div className="LoginForm-wrapper">
            <form onSubmit={handleSubmit} className="login-form-form">
                <input
                    onChange={(e) => handleChange("email", e.target.value)}
                    type="text"
                    placeholder="Username/Email"
                    required
                />
                <input
                    onChange={(e) => handleChange("password", e.target.value)}
                    type="password"
                    placeholder="Password"
                    required
                />
                {errorState && <p className='error'>Sorry, your username or password is incorrect.</p>}
                <div className="login-btn-container">
                    <input
                        className="login-btn"
                        type="submit"
                        value="LOGIN" />
                </div>
            </form>
        </div>
    )
}