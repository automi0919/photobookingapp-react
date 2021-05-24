import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import API from '../../utils/API';
import { CurrentStep } from '../CurrentStep/CurrentStep';


export function SelectTime({ appointmentData, setAppointmentData }) {

    const [appointments, setAppointments] = useState()
    const availability = ['9:00 - 10:30', '11:00 - 12:30', '1:00 - 2:30', '3:00 - 4:30', '5:00 - 6:30'];
    let history = useHistory();

    function handleChange(field, value) {
        setAppointmentData(prevState => {
            return {
                ...prevState,
                [field]: value
            }
        })
    };

    function handleSubmit(e) {
        history.push('/book/add-info')
    }

    function getAppointments() {
        API.getAppointments(appointmentData)
            .then((res) => setAppointments(res.data))
    };



    useEffect(() => {
        getAppointments();
    }, []);

    return (
        <div className="page-wrapper">
            <div className="book-wrapper">
                <div className="left-third">
                    <div className="current-step-wrapper">
                        <div className="step active">1</div>
                        <div className="step active">2</div>
                        <div className="step active">3</div>
                        <div className="step active">4</div>
                        <div className="step">5</div>
                        <div className="step">6</div>
                    </div>
                </div>
                <div className="right-two-thirds">
                    <h1>Select a Time Slot</h1>
                    <div className="choose-time-button-container">
                        {appointments ? availability.map((slot) => (
                            <>
                                <input
                                    type="radio"
                                    id={slot}
                                    value={slot}
                                    name="appointmentSelection"
                                    onChange={(e) => handleChange("timeSlot", e.target.value)}
                                    disabled={appointments.some(appt => appt === slot)}
                                />
                                <span>{slot}</span>
                            </>
                        )) : <div className="table-loading">Loading Appointment Data</div>}
                    </div>
                    <div className="button-wrapper">
                        <button id="back-button" onClick={() => history.goBack()}>BACK</button>
                        <button onClick={handleSubmit}>NEXT STEP</button>
                    </div>
                </div>
            </div>
        </div>
    )
}