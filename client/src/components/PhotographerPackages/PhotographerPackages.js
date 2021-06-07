import React, { useContext, useState, useEffect } from 'react'
import UserContext from "../../utils/UserContext";
import './PhotographerPackages.css';
import API from '../../utils/API';

export function PhotographerPackages() {

    const { userEmail, userId, isAuthenticated, updateUser } = useContext(UserContext);

    // const [bizHours, setBizHours] = useState({
    //     // openingTime: '08:00',
    //     // closingTime: '18:00',
    //     // sunday: true,
    //     // monday: true,
    //     // tuesday: true,
    //     // wednesday: true,
    //     // thursday: true,
    //     // friday: true,
    //     // saturday: true
    // });

    const [currentUser, setCurrentUser] = useState()

    function handleChange(field, value) {
        setCurrentUser(prevState => {
            return {
                ...prevState,
                [field]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        API.updateUser(userId, currentUser)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        // Take the state and make an API call to update the user with it
    }

    useEffect(() => {
        if (userId) {
            API.getUserData(userId)
                .then(res => setCurrentUser(res.data))
                .catch(err => console.log(err))
            // Get the photographer's openingTime and closingTime
            // Set those values as the default values for the biz hours form below.
        }
    }, [])

    console.log(currentUser)

    return (
        <div>
        {!currentUser ? <h1>Loading...</h1> :
            <div className="availability-setup-container">
                <h1>Set up your availability</h1>
            </div>
}
</div>
    )
}
