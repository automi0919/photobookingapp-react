import React, { useContext } from 'react'
import UserContext from "../../utils/UserContext";
import { LeftNav } from '../../components/PhotographerSide/LeftNav/LeftNav'
import { PhotographerPackages } from '../../components/PhotographerSide/PhotographerPackages/PhotographerPackages'

export function Packages() {

    const { userId } = useContext(UserContext);

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
