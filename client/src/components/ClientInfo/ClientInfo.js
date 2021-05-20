import React from 'react';
import { useHistory } from 'react-router-dom';
import API from '../../utils/API';

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
        API.saveAppointment({
            firstName: appointmentData.firstName,
            lastName: appointmentData.lastName,
            email: appointmentData.email,
            realtor: appointmentData.realtor,
            street: appointmentData.street,
            zip: appointmentData.zip,
            city: appointmentData.city,
            state: appointmentData.state,
            date: appointmentData.date,
            time: appointmentData.timeSlot,
            package: appointmentData.package,
            sq_ft: appointmentData.sq_ft,
            price: appointmentData.price,
        })
            .then(res => history.push('/book/confirm'))
            .catch((err) => console.log(err));
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