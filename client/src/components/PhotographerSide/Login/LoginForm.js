import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import UserContext from "../../../utils/UserContext";
import './styles.css'
import API from "../../../utils/API";

export function LoginForm() {

    let history = useHistory();

    const { userEmail, userId, isAuthenticated, updateUser } = useContext(UserContext);

    const [userLoginData, setUserLoginData] = useState({
        email: '',
        password: '',
        error: ''
    })

    const [errorState, setErrorState] = useState()

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    const handleChange = (field, value) => {
        setUserLoginData(prevState => {
            return {
                ...prevState,
                [field]: value
            }
        })
    }

    async function setLocalStorage(user) {
        window.localStorage.setItem("userId", JSON.stringify(user._id))
        window.localStorage.setItem("isAuthenticated", JSON.stringify(true))
        await sleep(500)
        history.push('/dashboard')
    }

    function fetchUserData(res) {
            API.getUserDataByEmail(userLoginData.email)
                .then(res => setLocalStorage(res.data))
                .catch(err => console.log(err))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        API.loginUser(userLoginData)
            .then(res => fetchUserData(res.data))
            .catch(err => setErrorState(err))
    }

    return (
        <div className="LoginForm-wrapper">
            <form onSubmit={handleSubmit} className="login-form-form">
                <input
                    onChange={(e) => handleChange("email", e.target.value)}
                    type="text"
                    placeholder="    Enter Your Email"
                    required
                />
                <input
                    onChange={(e) => handleChange("password", e.target.value)}
                    type="password"
                    placeholder="    Enter Your Password"
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