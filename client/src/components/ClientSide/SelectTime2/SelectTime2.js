import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import API from '../../../utils/API';
import getUserId from '../../../utils/getUserId';
import "../EnterAddress/EnterAddress.css";
import './SelectTime2.css';
var dayjs = require('dayjs')



export function SelectTime2({ appointmentData, setAppointmentData }) {

    const [appointments, setAppointments] = useState()
    const [photographerData, setPhotographerData] = useState()
    const [availability, setAvailability] = useState([])

    let tempAvail = []

    let history = useHistory();

    function handleChange(startTimeValue, endTimeValue) {
        setAppointmentData(prevState => {
            return {
                ...prevState,
                startTime: startTimeValue,
                endTime: endTimeValue
            }
        })
    };

    const handleDateChange = function (field, value) {
        setAppointmentData({ ...appointmentData, [field]: value });
        // getAppointments();
    }

    // function handleDateChange(field, value) {
    //     setAppointmentData(prevState => {
    //         return {
    //             ...prevState,
    //             [field]: value
    //         }
    //     })
    //     getAppointments();
    // }

    function generateTimeSlots() {
        if (photographerData) {
            const openingTimeArray = photographerData.openingTime.split(':');
            const closingTimeArray = photographerData.closingTime.split(':');
            const appointmentInterval = photographerData.appointmentInterval;

            let openingTime = dayjs().add(1, 'day').set('hour', openingTimeArray[0]).set('minute', openingTimeArray[1]).set('second', 0).set('millisecond', 0);
            let closingTime = dayjs().add(1, 'day').set('hour', closingTimeArray[0]).set('minute', closingTimeArray[1]).set('second', 0);
            console.log(openingTime.valueOf());
            console.log(closingTime.valueOf());

            for (let i = 0; openingTime.valueOf() < (closingTime.valueOf()); i++) {
                tempAvail.push(openingTime)
                setAvailability(tempAvail);
                openingTime = openingTime.add(appointmentInterval, 'minute')
            }
        }
    }

    function handleSubmit(e) {
        history.push(`/book/add-info/${userId}`)
    }

    function getAppointments() {
        API.getAppointments(appointmentData)
            .then((res) => setAppointments(res.data))
            .catch(err => console.log(err))
    };

    useEffect(() => {
        // if (!appointmentData.date) {
        //     return
        // }
        getAppointments();
    }, [appointmentData]);

    let userId = getUserId.getUserId(window.location.pathname);

    useEffect(() => {
        if (userId) {
            API.getUserData(userId)
                .then(res => setPhotographerData(res.data))
                .catch(err => console.log(err))
            generateTimeSlots();
        }
    }, [userId])

    useEffect(() => {
        generateTimeSlots();
    }, [photographerData])

    console.log(appointmentData);

    return (
        <div className="page-wrapper">
            <div className="book-wrapper">
                <div className="left-third">
                    <div className="current-step-wrapper">
                        <div className="step active">1</div>
                        <div className="step active">2</div>
                        <div className="step active">3</div>
                        <div className="step">4</div>
                        <div className="step">5</div>
                    </div>
                </div>
                <div className="right-two-thirds">
                    <div className="card-content">
                        <div className="header">
                            <h1>Choose a Time Slot</h1>
                        </div>
                    </div>
                    <div className="choose-time-button-container">
                        {availability ? availability.map((slot) => (
                            <div className="inputs">
                                <input
                                    className="slot-inputs"
                                    type="radio"
                                    id={slot}
                                    startTime={slot.format()}
                                    endTime={dayjs(slot).add(appointmentData.duration, 'minute').format()}
                                    value={slot}
                                    key={slot}
                                    name="appointmentSelection"
                                    onChange={(e) => handleChange(e.target.attributes.startTime.value, e.target.attributes.endTime.value)}
                                    // hidden={appointments.some(appt => appt.startTime === slot.format())}
                                    checked={appointmentData.startTime === slot.format()}
                                />
                                <label
                                    for={slot}
                                    className="slot-labels"
                                // className={appointments.some(appt => appt.startTime === slot.startTime)}>
                                // hidden={appointments.some(appt => appt.startTime === slot.startTime)}
                                >
                                    {slot.format('h:mm A')}
                                    {/* {slot.format()} */}
                                </label>
                                {/* <span>{slot.startTimeDisplay} - {slot.endTimeDisplay}</span> */}
                            </div>
                        )) : <div className="table-loading">Loading</div>}
                    </div>
                    <div className="button-wrapper">
                        <button id="back-button" onClick={() => history.goBack()}>BACK</button>
                        <button className="book-btn" onClick={handleSubmit}>NEXT STEP</button>
                    </div>
                </div>
            </div>
        </div>
    )
}