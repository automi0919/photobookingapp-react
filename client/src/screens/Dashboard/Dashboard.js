import React, { useContext, useEffect } from 'react';
import UserContext from "../../utils/UserContext";
import API from '../../utils/API';
import { useHistory } from 'react-router-dom';

export function Dashboard() {

    let history = useHistory();

    const { userEmail, userId, isAuthenticated, updateUser } = useContext(UserContext);

    function handleRedirect (){
        history.push(`book/${userId}`)
    }

    useEffect(() => {
        // API.getDashboardData(userEmail);
        API.getUserData(userEmail)
            .then(res => updateUser(userEmail, res.data._id, isAuthenticated))
            .catch(err => console.log(err))
    }, []);

    console.log(userId);
    console.log(isAuthenticated);
    console.log(userEmail);

    return (
        <div>
            <h1>Dashboard</h1>
            {!userId ? <h1>You  must be logged in to view this content.</h1> : <button onClick={handleRedirect}>View Booking Link</button>}
        </div>
    )
};