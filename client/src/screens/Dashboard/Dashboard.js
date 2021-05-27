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

    // const [appointmentList, setAppointmentList] = useState([])

    function handleRedirect() {
        history.push(`book/${userId}`)
    }

    useEffect(() => {
        // API.getDashboardData(userEmail);
        API.getUserData(userEmail)
            .then(res => updateUser(userEmail, res.data._id, isAuthenticated))
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <TopNav />
            <div className="body-container">
                <LeftNav />
                <div className="body-content-container">
                    <h1 className="page-header">Dashboard</h1>
                    {!userId ? <h1>You  must be logged in to view this content.</h1> :
                        <div>
                            {/* <div>
                                {!appointmentList ? <h2>No upcoming appointments</h2> : appointmentList.map((appointment) => (
                                    <ul>
                                        <li key={appointment._id}>{appointment.street}</li>
                                    </ul>
                                ))}
                            </div> */}
                            <div className="button-container">
                                <button className="new-appointment">+ ADD NEW</button>
                                <button>BLOCK TIME</button>
                                <button onClick={handleRedirect}>BOOKING LINK</button>
                            </div>
                            <CalendarComponent />
                        </div>}
                </div>
            </div>
        </div>
    )
};