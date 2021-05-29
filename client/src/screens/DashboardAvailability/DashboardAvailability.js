import React, { useContext } from 'react'
import UserContext from "../../utils/UserContext";
import { LeftNav } from '../../components/LeftNav/LeftNav'
import PhotographerAvailability from '../../components/PhotographerAvailability/PhotographerAvailability'

function DashboardAvailability() {

    const { userEmail, userId, isAuthenticated, updateUser } = useContext(UserContext);

    return (
        <div>
            {!userId ? <h3>Loading...</h3> :
                <div className="body-container">
                    <div className="left-nav">
                        <LeftNav />
                    </div>
                    <div className="body-content-container">
                        <PhotographerAvailability />
                    </div>
        </div>}
        </div>
    )
}

export default DashboardAvailability
