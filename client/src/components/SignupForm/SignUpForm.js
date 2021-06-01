import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './styles.css'
import API from "../../utils/API"

export function SignUpForm({ newUser, setNewUser }) {

    const [errorState, setErrorState] = useState()

    let history = useHistory();

    function handleChange(field, value) {
        setNewUser(prevState => {
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
        history.push('/')
    }

    function fetchUserData() {
        API.getUserDataByEmail(newUser.email)
            .then(res => setLocalStorage(res.data))
            .catch(err => console.log(err))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        API.createNewUser(newUser)
            .then(res => fetchUserData())
            .catch(err => setErrorState(err))
    }

    return (
        <div className="SignUpForm-wrapper">
            <form onSubmit={handleSubmit} className="signup-form-form">
                <input onChange={(e) => handleChange("firstName", e.target.value)} type="text" placeholder="    First Name" required />
                <input onChange={(e) => handleChange("lastName", e.target.value)} type="text" placeholder="    Last Name" required />
                <input onChange={(e) => handleChange("businessName", e.target.value)} type="text" placeholder="    Business Name   (Optional)" />
                <input onChange={(e) => handleChange("email", e.target.value)} type="text" placeholder="    Email" required />
                <input onChange={(e) => handleChange("password", e.target.value)} type="password" placeholder="    Password" required />
                {errorState && <p className="error">An error has occurred. Please try again.</p>}
                <div className="submit-btn-container">
                    <input className="submit-btn" type="submit" value="CREATE ACCOUNT" />
                </div>
            </form>
        </div>
    )
}