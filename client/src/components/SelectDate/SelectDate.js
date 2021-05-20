import React from 'react'
import './styles.css'
import { useHistory } from 'react-router-dom';

export function SelectDate({ appointmentData, setAppointmentData }) {

    let history = useHistory();

    console.log(appointmentData);

    function handleChange(field, value) {
        setAppointmentData(prevState => {
            return {
                ...prevState,
                [field]: value
            }
        })
        console.log(appointmentData);
    }

    function handleSubmit(e){
        e.preventDefault();
        history.push('/book/select-time')
    }

    return (
        <div>
            <h1>Select a Date</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="date"
                    onChange={(e) => handleChange('date', e.target.value)}
                />
                <input
                    type="Submit"
                    value="Choose Date"
                />
            </form>
        </div>
    )
}