import React, { useContext, useEffect, useState } from 'react';
import UserContext from "../../utils/UserContext";
import API from '../../utils/API';
import { useHistory } from 'react-router-dom';
import { TopNav } from '../../components/TopNav/TopNav';
import { CalendarComponent } from '../../components/CalendarComponent/CalendarComponent';
import { LeftNav } from '../../components/LeftNav/LeftNav';
import './Dashboard.css';

export function Dashboard() {

    let history = useHistory();

    const { userEmail, userId, isAuthenticated, updateUser } = useContext(UserContext);

    function handleRedirect() {
        history.push(`book/${userId}`)
    }

    useEffect(() => {
        API.getUserData(userId)
            .then(res => updateUser(res.data.email, res.data._id, isAuthenticated))
            .catch(err => console.log(err))
    }, [userId]);

    return (
        <div>
            {!userId ? <h3>Loading...</h3> :
                <div className="body-container">
                    <div className="left-nav">
                        <LeftNav />
                    </div>
                    <div className="body-content-container">
                        <h1 className="page-header">Appointment Calendar</h1>
                        {isAuthenticated === false ?
                            <h2>You must be logged in to view</h2> :
                            <div className="calendar-btn-container">
                                <div className="button-container">
                                    {/* <button className="new-appointment">ADD APPOINTMENT</button>
                                    <button className="block-btn">BLOCK TIME</button> */}
                                    <button className="new-appointment" onClick={handleRedirect}>+ ADD APPOINTMENT</button>
                                </div>
                                <CalendarComponent />
                            </div>}
                    </div>
                </div>}
        </div>
    )
};