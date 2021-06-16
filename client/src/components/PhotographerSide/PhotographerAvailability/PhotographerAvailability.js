import React, { useContext, useState, useEffect } from 'react'
import UserContext from "../../../utils/UserContext";
import './PhotographerAvail.css';
import API from '../../../utils/API';

export function PhotographerAvailability() {

    const { userId } = useContext(UserContext);

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
            // .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (userId) {
            API.getUserData(userId)
                .then(res => setCurrentUser(res.data))
                .catch(err => console.log(err))
        }
    }, [])

    // console.log(currentUser);

    function formatTime(time) {

        let timeArray = time.split(':')

        if (timeArray[0] < 12) {
            return `${time} AM`;
        } else {
            timeArray[0] = timeArray[0] - 12
            return `${timeArray[0]}:${timeArray[1]} PM`;
        }
    }

    return (
        <div>
            {currentUser &&
                <div className="availability-setup-container">
                    <h1>Set up your availability</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <h2>What are your standard business hours?</h2>
                            <select onChange={(e) => handleChange("openingTime", e.target.value)} name="openingTime" id="openingTime">
                                <option value={currentUser.openingTime} selected>{formatTime(currentUser.openingTime)}</option>
                                <option value="6:00">6:00AM</option>
                                <option value="6:30">6:30AM</option>
                                <option value="7:00">7:00AM</option>
                                <option value="7:30">7:30AM</option>
                                <option value="8:00">8:00AM</option>
                                <option value="8:30">8:30AM</option>
                                <option value="9:00">9:00AM</option>
                                <option value="9:30">9:30AM</option>
                                <option value="10:00">10:00AM</option>
                                <option value="10:30">10:30AM</option>
                            </select>
                            <select onChange={(e) => handleChange("closingTime", e.target.value)} name="closingTime" id="closingTime">
                                <option value={currentUser.closingTime} selected>{formatTime(currentUser.closingTime)}</option>
                                <option value="16:00">4:00PM</option>
                                <option value="16:30">4:30PM</option>
                                <option value="17:00">5:00PM</option>
                                <option value="17:30">5:30PM</option>
                                <option value="18:00">6:00PM</option>
                                <option value="18:30">6:30PM</option>
                                <option value="19:00">7:00PM</option>
                                <option value="19:30">7:30PM</option>
                                <option value="20:00">8:00PM</option>
                                <option value="20:30">8:30PM</option>
                            </select>
                        </div>
                        {/* <div>
                    <h2>Which days of the week are you open?</h2>
                    <div className='week-selector'>
                        <label for="sunday">Sunday</label><br></br>
                        <input onChange={(e) => handleChange("sunday", e.target.checked)} type="checkbox" id="sunday" name="sunday" value="Sunday" checked />
                        <label for="monday">Monday</label><br></br>
                        <input onChange={(e) => handleChange("monday", e.target.checked)} type="checkbox" id="monday" name="monday" value="Monday" checked />
                        <label for="tuesday">Tuesday</label><br></br>
                        <input onChange={(e) => handleChange("tuesday", e.target.checked)} type="checkbox" id="tuesday" name="tuesday" value="Tuesday" checked />
                        <label for="wednesday">Wednesday</label><br></br>
                        <input onChange={(e) => handleChange("wednesday", e.target.checked)} type="checkbox" id="wednesday" name="wednesday" value="Wednesday" checked />
                        <label for="thursday">Thursday</label><br></br>
                        <input onChange={(e) => handleChange("thursday", e.target.checked)} type="checkbox" id="thursday" name="thursday" value="Thursday" checked />
                        <label for="friday">Friday</label><br></br>
                        <input onChange={(e) => handleChange("friday", e.target.checked)} type="checkbox" id="friday" name="friday" value="Friday" checked />
                        <label for="saturday">Saturday</label><br></br>
                        <input onChange={(e) => handleChange("saturday", e.target.checked)} type="checkbox" id="saturday" name="saturday" value="Saturday" checked />
                    </div>
                </div> */}
                        <input className="submit-btn" type="submit" value="SAVE" />
                    </form>
                </div>
            }
        </div>
    )
}
