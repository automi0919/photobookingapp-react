import React from 'react';
import { useHistory } from 'react-router-dom';

export function ClientInfo({ appointmentData, setAppointmentData }) {

    let history = useHistory();

    function handleChange(field, value) {
        setAppointmentData(prevState => {
            return {
                ...prevState,
                [field]: value
            }
        })

        console.log(appointmentData);
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
        history.push('/book/confirm')
    }
    return (
        <div>
            <div>
                <h1>Enter Your Details</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter your first name"
                    onChange={(e) => handleChange("firstName", e.target.value)}
                />
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter your last name"
                    onChange={(e) => handleChange("lastName", e.target.value)}
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    onChange={(e) => handleChange("email", e.target.value)}
                />
                <input
                    type="checkbox"
                    name="realtor"
                    id="realtor"
                    onChange={(e) => handleRealtorChange("realtor", e.target.checked)}
                />
                <span>Are you a realtor?</span>
                <input
                    type="submit"
                    value="Book Appointment"
                />
            </form>
        </div>
    )
}