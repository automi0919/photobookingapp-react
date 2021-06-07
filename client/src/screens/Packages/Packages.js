import React, { useContext } from 'react'
import UserContext from "../../utils/UserContext";
import { LeftNav } from '../../components/LeftNav/LeftNav'
import { PhotographerPackages } from '../../components/PhotographerPackages/PhotographerPackages'

export function Packages() {

    const { userEmail, userId, isAuthenticated, updateUser } = useContext(UserContext);

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
