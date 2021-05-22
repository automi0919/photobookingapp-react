import React from 'react'
import './styles.css'
import { useHistory } from 'react-router-dom';
import API from '../../utils/API';

export function SelectDate({ appointmentData, setAppointmentData }) {

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
        history.push('/book/select-time')
    }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     API.getAppointments(appointmentData)
    //         .then(res => console.log(res))
    //         // .then(res => history.push('/book/select-time'))
    //         .catch((err) => console.log(err));
    // }

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