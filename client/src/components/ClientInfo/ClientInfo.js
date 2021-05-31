import React from 'react';
import { useHistory } from 'react-router-dom';
import API from '../../utils/API';
import { CurrentStep } from '../CurrentStep/CurrentStep';
import getUserId from '../../utils/getUserId';
import "../EnterAddress/EnterAddress.css";


export function ClientInfo({ appointmentData, setAppointmentData }) {

    let history = useHistory();

    function handleChange(field, value) {
        setAppointmentData(prevState => {
            return {
                ...prevState,
                [field]: value
            }
        })
    }

    function handleRealtorChange(field, state) {

        if (state === false) {
            setAppointmentData({ ...appointmentData, [field]: false })
        } else {
            setAppointmentData({ ...appointmentData, [field]: true })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        API.saveAppointment(appointmentData)
            .then(res => history.push(`/book/confirm/${userId}`))
            .catch((err) => console.log(err));
    }

    let userId = getUserId.getUserId(window.location.pathname);

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
                    </div>
                </div>
                <div className="right-two-thirds">
                    <div>
                        <h1>Enter Your Details</h1>
                    </div>
                    <form className="client-info">
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder={appointmentData.firstName ? appointmentData.firstName : "    Enter your first name"}
                            onChange={(e) => handleChange("firstName", e.target.value)}
                        />
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder={appointmentData.lastName ? appointmentData.lastName : "    Enter your last name"}
                            onChange={(e) => handleChange("lastName", e.target.value)}
                        />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder={appointmentData.email ? appointmentData.email : "    Enter your email"}
                            onChange={(e) => handleChange("email", e.target.value)}
                        />
                        <input
                            type="checkbox"
                            name="realtor"
                            id="realtor"
                            onChange={(e) => handleRealtorChange("realtor", e.target.checked)}
                            checked={appointmentData.realtor}
                        />
                        <span>Are you a realtor?</span>
                    </form>
                    <div className="button-wrapper">
                        <button id="back-button" onClick={() => history.goBack()}>BACK</button>
                        <button className="book-btn" onClick={handleSubmit}>NEXT STEP</button>
                    </div>
                </div>
            </div>
        </div>
    )
}