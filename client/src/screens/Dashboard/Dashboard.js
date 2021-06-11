import React, { useContext, useEffect } from 'react';
import UserContext from "../../utils/UserContext";
import API from '../../utils/API';
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

    useEffect(() => {
        if (!userId) {

            console.log('useEffect ran');

            authToken = window.localStorage.getItem('token');

            if (!authToken) {
                history.push('login')
            } else {
                API.authorizeUser(authToken)
                    .then(res => updateUser(res.data.email, res.data._id))
                    .catch(err => console.log(err))
            }
        }
    }, [])

    console.log(userId)

    return (
        <div>

            <div className="body-container">
                <div className="left-nav">
                    <LeftNav />
                </div>
                {userId &&
                    <div className="body-content-container">
                        <h1 className="page-header">Appointment Calendar</h1>
                        <div className="calendar-btn-container">
                            <div className="button-container">
                                {/* <button className="new-appointment">ADD APPOINTMENT</button>
                                    <button className="block-btn">BLOCK TIME</button> */}
                                <button className="new-appointment" onClick={handleRedirect}>+ ADD APPOINTMENT</button>
                            </div>
                            <CalendarComponent />
                        </div>
                    </div>}
            </div>
        </div>
    )
};