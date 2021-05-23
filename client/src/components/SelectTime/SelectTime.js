import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import API from '../../utils/API';



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
        <div>
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
            <button onClick={handleSubmit}>Book Appointment</button>
        </div>
    )
}