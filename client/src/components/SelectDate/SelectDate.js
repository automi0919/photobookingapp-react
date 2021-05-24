import React from 'react'
import './styles.css'
import { useHistory } from 'react-router-dom';
import API from '../../utils/API';
import './styles.css';

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
        <div className="page-wrapper">
            <div className="book-wrapper">
                <div className="left-third">

                </div>
                <div className="right-two-thirds">
                    <div className="header">
                        <h1>Select a Date</h1>
                    </div>

                    <form>
                        <input
                            type="date"
                            onChange={(e) => handleChange('date', e.target.value)}
                        />
                        {/* <input
                            type="Submit"
                            value="Choose Date"
                        /> */}
                    </form>
                    <div className="button-wrapper">
                        <button id="back-button" onClick={() => history.goBack()}>BACK</button>
                        <button onClick={handleSubmit}>NEXT STEP</button>
                    </div>

                </div>
            </div>
        </div>
    )
}