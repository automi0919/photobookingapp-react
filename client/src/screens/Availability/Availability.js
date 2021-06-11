import React, { useContext, useEffect } from 'react'
import API from '../../utils/API';
import { useHistory } from 'react-router-dom';
import UserContext from "../../utils/UserContext";
import { LeftNav } from '../../components/PhotographerSide/LeftNav/LeftNav'
import { PhotographerAvailability } from '../../components/PhotographerSide/PhotographerAvailability/PhotographerAvailability'

export function Availability() {

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

    return (
        <div>
                <div className="body-container">
                    <div className="left-nav">
                        <LeftNav />
                    </div>
                    {userId &&
                    <div className="body-content-container">
                        <PhotographerAvailability />
                    </div>}
                </div>
        </div>
    )
}
