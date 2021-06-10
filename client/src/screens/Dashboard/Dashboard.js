import React, { useContext, useEffect } from 'react';
import UserContext from "../../utils/UserContext";
import API from '../../utils/API';
import helper from '../../utils/helper'
import { useHistory } from 'react-router-dom';
import { CalendarComponent } from '../../components/PhotographerSide/CalendarComponent/CalendarComponent';
import { LeftNav } from '../../components/PhotographerSide/LeftNav/LeftNav';
import './Dashboard.css';

export function Dashboard() {

    let authToken;

    let history = useHistory();

    const { userId, isAuthenticated, updateUser } = useContext(UserContext);

    function handleRedirect() {
        history.push(`book/${userId}`)
    }

    // useEffect(() => {
    //     API.getUserData(userId)
    //         .then(res => updateUser(res.data.email, res.data._id, isAuthenticated))
    //         .catch(err => console.log(err))
    // }, [userId]);

    useEffect(() => {
        authToken = window.localStorage.getItem('token');
    }, [])

    useEffect(() => {
        if (authToken) {
            API.authorizeUser(authToken)
                .then(res => console.log(res))
                // If we authorize the user, set the userId
                .catch(err => console.log(err))
                // Otherwise redirect them to the login
        }
    })

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