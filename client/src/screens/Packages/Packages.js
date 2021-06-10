import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import API from "../../utils/API";
import UserContext from "../../utils/UserContext";
import { LeftNav } from '../../components/PhotographerSide/LeftNav/LeftNav'
import { PhotographerPackages } from '../../components/PhotographerSide/PhotographerPackages/PhotographerPackages'

export function Packages() {

    let authToken;

    let history = useHistory();

    const { userId, updateUser } = useContext(UserContext);

    useEffect(() => {
        authToken = window.localStorage.getItem('token');

        if (!authToken) {
            history.push('login')
        } else {
            API.authorizeUser(authToken)
                .then(res => updateUser(res.data.email, res.data._id))
                .catch(err => console.log(err))
        }
    }, [])

    return (
        <div>
            {!userId ? <h3>Loading...</h3> :
                <div className="body-container">
                    <div className="left-nav">
                        <LeftNav />
                    </div>
                    <div className="body-content-container">
                        <PhotographerPackages />
                    </div>
                </div>}
        </div>
    )
}
