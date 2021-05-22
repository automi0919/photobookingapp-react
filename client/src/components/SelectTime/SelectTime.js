import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import API from '../../utils/API';

const availability = ['9:00 - 10:30', '11:00 - 12:30', '1:00 - 2:30', '3:00 - 4:30', '5:00 - 6:30'];
const appointments = ['11:00 - 12:30'];

let availabilityList = availability.filter((slot) => !appointments.includes(slot));

export function SelectTime({ appointmentData, setAppointmentData }) {

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
            .then(res => console.log(res.data));
    };

    useEffect(() => {
        getAppointments();
    }, []);

    return (
        <div>
            <h1>Select a Time Slot</h1>
            <div className="choose-time-button-container">
                {availabilityList.map((slot) =>
                (
                    <>
                        <input
                            type="radio"
                            id={slot}
                            value={slot}
                            name="appointmentSelection"
                            onChange={(e) => handleChange("timeSlot", e.target.value)}
                        />
                        <span>{slot}</span>
                    </>
                )
                )}
            </div>
            <button onClick={handleSubmit}>Book Appointment</button>
        </div>
    )
}