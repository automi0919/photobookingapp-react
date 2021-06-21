import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CurrentStep } from '../CurrentStep/CurrentStep';
import getUserId from '../../../utils/getUserId';
import "../EnterAddress/EnterAddress.css";
import API from '../../../utils/API';

export function ConfirmPackage({ appointmentData, setAppointmentData }) {

    const [existingPackages, setExistingPackages] = useState()

    let history = useHistory();

    useEffect(() => {

        if (existingPackages) {

            existingPackages.map((photoPackage) => {
                if (appointmentData.sq_ft <= photoPackage.sq_ft_max && appointmentData.sq_ft >= photoPackage.sq_ft_min) {
                    console.log(photoPackage.price)
                    setAppointmentData(prevState => {
                        return {
                            ...prevState,
                            package: photoPackage.package,
                            price: photoPackage.price,
                            duration: photoPackage.duration,
                        }
                    })
                }
            })
        }
    }, [appointmentData.sq_ft, existingPackages]);

    function handleConfirmation() {
        history.push(`/book/select-time/${userId}`)
    }

    let userId = getUserId.getUserId(window.location.pathname);

    useEffect(() => {
        if (userId) {
            API.getPackageData(userId)
                .then(res => setExistingPackages(res.data))
                .catch(err => console.log(err))
        }
    }, [])

    console.log(existingPackages)
    console.log(appointmentData);

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
                    </div>
                </div>
                <div className="right-two-thirds">
                    <div className="header">
                        <h1>Confirm Your Package</h1>
                    </div>
                    <div>
                        {!appointmentData.sq_ft ? <h2>Loading Property Data...</h2> : <h2>That property is {appointmentData.sq_ft} square feet which is ${appointmentData.price}.</h2>}
                    </div>
                    <div className="button-wrapper">
                        <button id="back-button" onClick={() => history.goBack()}>BACK</button>
                        <button className="book-btn" onClick={handleConfirmation}>NEXT STEP</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


