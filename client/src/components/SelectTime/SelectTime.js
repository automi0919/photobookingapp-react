import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import API from '../../utils/API';
import getUserId from '../../utils/getUserId';
import './SelectTime.css';
import Calendar from 'react-calendar';


export function SelectTime({ appointmentData, setAppointmentData }) {

    const [appointments, setAppointments] = useState()
    // const availability = ['9:00 - 10:30', '11:00 - 12:30', '1:00 - 2:30', '3:00 - 4:30', '5:00 - 6:30'];

    const availability = [{
        startTime: '9:00',
        endTime: '10:30'
    },
    {
        startTime: '11:00',
        endTime: '12:30'
    },
    {
        startTime: '1:00',
        endTime: '2:30'
    },
    {
        startTime: '3:00',
        endTime: '4:30'
    },
    {
        startTime: '5:00',
        endTime: '6:30'
    },
    ];
    let history = useHistory();

    function handleChange(startTimeValue, endTimeValue) {
        console.log(startTimeValue);
        console.log(endTimeValue);
        setAppointmentData(prevState => {
            return {
                ...prevState,
                startTime: startTimeValue,
                endTime: endTimeValue
            }
        })
    };

    function handleDateChange(field, value) {
        setAppointmentData(prevState => {
            return {
                ...prevState,
                [field]: value
            }
        })
        getAppointments();
    }

    function handleSubmit(e) {
        history.push(`/book/add-info/${userId}`)
    }

    function getAppointments() {
        API.getAppointments(appointmentData)
            .then((res) => setAppointments(res.data))
    };

    // useEffect(() => {
    //     getAppointments();
    // }, [appointmentData]);

    let userId = getUserId.getUserId(window.location.pathname);

    console.log(appointmentData);
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
                    <div className="card-content">
                        <div className="date-picker">
                            <h2>Choose a Date</h2>
                            <input
                                type="date"
                                onChange={(e) => handleDateChange('date', e.target.value)}
                            />
                        </div>
                        <div className="choose-time-button-container">
                            {appointments ? availability.map((slot) => (
                                <div className="inputs">
                                    <input
                                        type="radio"
                                        id={slot}
                                        startTime={slot.startTime}
                                        endTime={slot.endTime}
                                        value={slot.startTime}
                                        key={slot}
                                        name="appointmentSelection"
                                        onChange={(e) => handleChange(e.target.attributes.startTime.value, e.target.attributes.endTime.value)}
                                        disabled={appointments.some(appt => appt === slot)}
                                    />
                                    <span>{slot.startTime} - {slot.endTime}</span>
                                </div>
                            )) : <div className="table-loading">Choose a date to see available appointments.</div>}
                        </div>
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