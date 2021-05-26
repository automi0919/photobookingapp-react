import React, { useContext, useEffect } from 'react';
import UserContext from "../../utils/UserContext";
import API from '../../utils/API';

export function Dashboard() {

    const { userEmail, isAuthenticated, updateUser } = useContext(UserContext);

    useEffect(() => {
        API.getDashboardData(userEmail);
    }, []);

    console.log(userEmail);

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
};