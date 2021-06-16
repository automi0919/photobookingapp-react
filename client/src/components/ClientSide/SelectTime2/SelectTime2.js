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
    const [availability, setAvailabilty] = useState([])
    // const availability = ['9:00 - 10:30', '11:00 - 12:30', '1:00 - 2:30', '3:00 - 4:30', '5:00 - 6:30'];

    // const availability = [{
    //     startTimeDisplay: '9:00',
    //     endTimeDisplay: '10:30',
    //     startTime: '9:0',
    //     endTime: '10:30'
    // },
    // {
    //     startTimeDisplay: '11:00',
    //     endTimeDisplay: '12:30',
    //     startTime: '11:0',
    //     endTime: '12:30'
    // },
    // {
    //     startTimeDisplay: '1:00',
    //     endTimeDisplay: '2:30',
    //     startTime: '13:0',
    //     endTime: '14:30'
    // },
    // {
    //     startTimeDisplay: '3:00',
    //     endTimeDisplay: '4:30',
    //     startTime: '15:0',
    //     endTime: '16:30'
    // },
    // {
    //     startTimeDisplay: '5:00',
    //     endTimeDisplay: '6:30',
    //     startTime: '17:0',
    //     endTime: '18:30'
    // },
    // ];
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

            let openingTime = dayjs().add(1, 'day').set('hour', openingTimeArray[0]).set('minute', openingTimeArray[1]).set('second', 0);
            let closingTime = dayjs().add(1, 'day').set('hour', closingTimeArray[0]).set('minute', closingTimeArray[1]).set('second', 0);

            let appointmentInterval = 30;

            for (let i = 0; i < 5; i++) {
                availability.push(openingTime);
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

    function chooseSlot() {
            if (availability) {
                return availability.map((slot) => <li>{slot}</li>);
            }
            // {!availability ? <div><h2>Loading</h2></div> : availability.map((slot) => (
            //     return <div className="inputs">
            //         <input
            //             className="slot-inputs"
            //             type="radio"
            //             id={slot.$d}
            //             startTime={slot.$d}
            //             // endTime={slot.endTime}
            //             value={slot.$d}
            //             // key={slot}
            //             name="appointmentSelection"
            //             // onChange={(e) => handleChange(e.target.attributes.startTime.value, e.target.attributes.endTime.value)}
            //             hidden={appointments.some(appt => appt.startTime === slot.startTime)}
            //         // checked={appointmentData.startTime === slot.startTime}
            //         />
            //         <label
            //             for={slot.$d}
            //             className="slot-labels"
            //         // className={appointments.some(appt => appt.startTime === slot.startTime)}>
            //         // hidden={appointments.some(appt => appt.startTime === slot.startTime)}
            //         >
            //             {slot.$d}
            //         </label>
            //     </div>
            // ))}

    }

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

    console.log(availability);

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
                        {chooseSlot()}
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