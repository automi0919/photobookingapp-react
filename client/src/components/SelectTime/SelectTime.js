import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import API from '../../utils/API';



export function SelectTime({ appointmentData, setAppointmentData }) {

    const [appointments, setAppointments] = useState()
    const availability = ['9:00 - 10:30', '11:00 - 12:30', '1:00 - 2:30', '3:00 - 4:30', '5:00 - 6:30'];
    let availabilityList = [];
    let history = useHistory();

    // function showAvailableSlots() {
    //     // console.log(appointments);
    //     const availabilityList = availability.filter(slot => appointments.date !== slot);
    // }

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

    // showAvailableSlots();

    return (
        <div>
            <h1>Select a Time Slot</h1>
            <div className="choose-time-button-container">
                {/* {!appointments ? <div>Loading...</div> :
                    availabilityList.map((slot) =>
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
                    )
                } */}

                {appointments ? availability.map((slot) => (
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
                )) : <div className="table-loading">Loading Appointment Data</div>}


                {/* {availabilityList.map((slot) =>
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
                )} */}

            </div>
            <button onClick={handleSubmit}>Book Appointment</button>
        </div>
    )
}