import React, { useContext } from 'react';
import UserContext from "../../../utils/UserContext";
import { useHistory } from 'react-router-dom';
import './LeftNav.css';

export function LeftNav() {

    const history = useHistory()

    const { userId } = useContext(UserContext);

    function handleLogout() {
        localStorage.clear()
        history.push('/login')
    }

    return (
        <div className="LeftNav-container">
            <div className="left-nav-links">
                <h1 className="logo">PhotoCal</h1>
                <a href="/">Calendar</a>
                {/* <a href="/">Customize Packages</a> */}
                <a href="/availability">Default Availability</a>
                <a href="/packages">Setup Packages</a>
                {/* <button className="book-appt-btn">BOOK APPOINTMENT</button> */}
                {/* <a href="/">My Profile</a> */}
            </div>
            <div className="logout">{userId ? <a className="login-logout-btn" onClick={handleLogout}>❮ LOGOUT</a> : <a className="login-logout-btn" href="/login">LOGIN</a>}</div>
        </div>
    )
}
