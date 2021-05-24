import React from 'react';
import { CurrentStep } from '../CurrentStep/CurrentStep';

export function Confirmation({ appointmentData }) {

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
                        <div className="step active">6</div>
                    </div>
                </div>
                <div className="right-two-thirds">
                    <div>
                        <h1>Congratulations! Your appointment is confirmed</h1>
                    </div>
                    <div>
                        <p>Appointment Date/Time: {appointmentData.date} {appointmentData.timeSlot}</p>
                        <p>Address: {appointmentData.street} {appointmentData.city} {appointmentData.state} {appointmentData.zip}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}