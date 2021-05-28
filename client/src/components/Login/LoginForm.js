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

    function setLocalStorage(user) {
        console.log(user)
        window.localStorage.setItem("userId", JSON.stringify(user._id))
        window.localStorage.setItem("isAuthenticated", JSON.stringify(true))
        history.push('/dashboard')
    }

    function fetchUserData(res) {
            API.getUserData(userLoginData.email)
                .then(res => setLocalStorage(res.data))
                .catch(err => console.log(err))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        API.loginUser(userLoginData)
            .then(res => fetchUserData(res.data))
            // .then(res => console.log(res.data))
            .catch(err => setErrorState(err))
    }

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
                {errorState && <p className='error'>Email or password is incorrect</p>}
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