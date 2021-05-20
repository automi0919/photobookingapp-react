import React from 'react';
import { useHistory } from 'react-router-dom';
import API from '../../utils/API';
import './styles.css';
export function EnterAddress({ appointmentData, setAppointmentData }) {

    let history = useHistory();

    function handleChange(field, value) {
        setAppointmentData(prevState => {
            return {
                ...prevState,
                [field]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        let options = {
            method: 'GET',
            url: 'https://mashvisor-api.p.rapidapi.com/property',
            params: {
                state: appointmentData.state,
                zip_code: appointmentData.zip,
                address: appointmentData.street,
                city: appointmentData.city
            },
            headers: {
                'x-rapidapi-key': 'a28485e035mshea53364c530bf58p1f6a19jsn9a5ad2a4ac17',
                'x-rapidapi-host': 'mashvisor-api.p.rapidapi.com'
            }
        };
        // history.push('/book/select-date');
        API.getAddress(options)
            .then(res => {
                setAppointmentData(prevState => {
                    return {
                        ...prevState,
                        sq_ft: res.data.content.sqft
                    }
                })
            })
            .then(
                history.push('/book/confirm-package')
            )
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div>
                <h1>Enter The Property Address</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="streetAddress"
                    placeholder="Enter the street address"
                    onChange={(e) => handleChange("street", e.target.value)}
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={(e) => handleChange("city", e.target.value)}
                />
                <input
                    type="text"
                    name="state"
                    placeholder="State"
                    onChange={(e) => handleChange("state", e.target.value)}
                />
                <input
                    type="text"
                    name="zip"
                    placeholder="Zip Code"
                    onChange={(e) => handleChange("zip", e.target.value)}
                />
                <input
                    type="submit"
                    value="Lookup Address"
                />
            </form>
        </div>
    )
}