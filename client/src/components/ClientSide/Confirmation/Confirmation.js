import React from 'react';
import { CurrentStep } from '../CurrentStep/CurrentStep';

export function Confirmation({ appointmentData }) {

    var dayjs = require('dayjs')

    return (
        <div className="page-wrapper">
            <div className="book-wrapper">
                <div className="left-third">
                    <div className="current-step-wrapper">
                        <div className="step active">1</div>
                        <div className="step active">2</div>
                        <div className="step active">3</div>
                        <div className="step active">4</div>
                        <div className="step active">5</div>
                    </div>
                </div>
                <div className="right-two-thirds">
                    <div className="confirmation-header">
                        <h1>Appointment Confirmed</h1>
                        <h2>You're all set. The details of your appointment are below.</h2>
                        <hr></hr>
                        <p><b>Appointment Date/Time:</b> {dayjs(appointmentData.startTime).format('MMMM D, YYYY h:mm A')}</p>
                        <p><b>Address:</b> {appointmentData.street} {appointmentData.city} {appointmentData.state} {appointmentData.zip}</p>
                    </div>
                    {/* <div>
                        <p>Appointment Date/Time: {appointmentData.date} {appointmentData.timeSlot}</p>
                        <p>Address: {appointmentData.street} {appointmentData.city} {appointmentData.state} {appointmentData.zip}</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}