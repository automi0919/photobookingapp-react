import React, { useContext } from 'react';
import UserContext from "../../utils/UserContext";
import { useHistory } from 'react-router-dom';
import './LeftNav.css';

export function LeftNav() {

    const history = useHistory()

    const { userEmail, userId, isAuthenticated, updateUser } = useContext(UserContext);

    function handleLogout() {
        window.localStorage.setItem("userId", JSON.stringify(''))
        window.localStorage.setItem("isAuthenticated", JSON.stringify(false))
        history.push('/login')
    }


    return (
        <div className="LeftNav-container">
            <div className="initials"><h1>PhotoCal</h1></div>
            <div className="left-nav-links"><h1>Links go here</h1></div>
            <div className="logout">{isAuthenticated ? <a className="login-logout-btn" onClick={handleLogout}>❮ LOGOUT</a> : <a className="login-logout-btn" href="/login">LOGIN</a>}</div>
        </div>
    )
}
