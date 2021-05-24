import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

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
        history.push('/book/select-date')
    }

    // console.log(appointmentData.package)

    if (!appointmentData.sq_ft) {
        return (
            <div>
                <h1>Getting Home Data...</h1>
            </div>
        )
    } else {
        return (
            <div className='page-wrapper'>
                <div className="book-wrapper">
                    <div className="left-third">

                    </div>
                    <div className="right-two-thirds">
                        <div className="header">
                            <h1>Confirm Your Package</h1>
                        </div>
                        <div>
                            <h2>That property is {appointmentData.sq_ft} square feet which is {appointmentData.price}.</h2>

                        </div>
                        <div className="button-wrapper">
                            <button id="back-button">Back</button>
                            <button onClick={handleConfirmation}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}