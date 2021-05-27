import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { CurrentStep } from '../CurrentStep/CurrentStep';
import getUserId from '../../utils/getUserId';

export function ConfirmPackage({ appointmentData, setAppointmentData }) {

    // console.log(appointmentData.package)

    let history = useHistory();

    useEffect(() => {

        console.log(appointmentData.sq_ft)

        if (appointmentData.sq_ft <= 1499) {
            setAppointmentData(prevState => {
                return {
                    ...prevState,
                    package: 'small-home',
                    price: '$159'
                }
            })
        } else if (appointmentData.sq_ft >= 1500 && appointmentData.sq_ft <= 2999) {
            setAppointmentData(prevState => {
                return {
                    ...prevState,
                    package: 'standard-home',
                    price: '$199'
                }
            })
        } else if (appointmentData.sq_ft >= 3000) {
            setAppointmentData(prevState => {
                return {
                    ...prevState,
                    package: 'large-home',
                    price: '$239'
                }
            })
        }
    }, [appointmentData.sq_ft]);

    function handleConfirmation() {
        history.push(`/book/select-time/${userId}`)
    }

    // function handleBackButton() {
    //     history.push
    // }

    // console.log(appointmentData.package)

    let userId = getUserId.getUserId(window.location.pathname);


    return (
        <div className='page-wrapper'>
            <div className="book-wrapper">
                <div className="left-third">
                    <div className="current-step-wrapper">
                        <div className="step active">1</div>
                        <div className="step active">2</div>
                        <div className="step">3</div>
                        <div className="step">4</div>
                        <div className="step">5</div>
                        <div className="step">6</div>
                    </div>
                </div>
                <div className="right-two-thirds">
                    <div className="header">
                        <h1>Confirm Your Package</h1>
                    </div>
                    <div>
                        {!appointmentData.sq_ft ? <h2>Loading Property Data...</h2> : <h2>That property is {appointmentData.sq_ft} square feet which is {appointmentData.price}.</h2>}
                    </div>
                    <div className="button-wrapper">
                        <button id="back-button" onClick={() => history.goBack()}>BACK</button>
                        <button onClick={handleConfirmation}>NEXT STEP</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


