import React from 'react'
import './styles.css'
import { useHistory } from 'react-router-dom';
import API from '../../utils/API';
import './styles.css';
import { CurrentStep } from '../CurrentStep/CurrentStep';

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
                    <div className="current-step-wrapper">
                        <div className="step active">1</div>
                        <div className="step active">2</div>
                        <div className="step active">3</div>
                        <div className="step">4</div>
                        <div className="step">5</div>
                        <div className="step">6</div>
                    </div>
                </div>
                <div className="right-two-thirds">
                    <div className="header">
                        <h1>Select a Date</h1>
                    </div>
                    <form className="select-date">
                        <input
                            type="date"
                            onChange={(e) => handleChange('date', e.target.value)}
                        />
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