import React, { useContext } from 'react';
import UserContext from "../../utils/UserContext";
import { useHistory } from 'react-router-dom';
import './TopNav.css';

export function TopNav() {

    const history = useHistory()

    const { userEmail, userId, isAuthenticated, updateUser } = useContext(UserContext);

    function handleLoginLogout() {
        updateUser('', '', false)
    }

    console.log(userEmail);

    return (
        <div className="top-nav-container">
            <a onClick={handleLoginLogout} href="/login">{userId ? "Logout" : "Login"}</a>
            <a href="/dashboard">
            {/* <span className="initials-span">
                MK
            </span> */}
            My Profile</a>
        </div>
    )
}
