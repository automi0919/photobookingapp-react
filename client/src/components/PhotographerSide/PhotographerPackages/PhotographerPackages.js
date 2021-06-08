import React, { useContext, useState, useEffect } from 'react'
import UserContext from "../../../utils/UserContext";
import './PhotographerPackages.css';
import API from '../../../utils/API';
import Modal from 'react-modal';
import {
    Link
} from "react-router-dom";

export function PhotographerPackages() {

    const { userEmail, userId, isAuthenticated, updateUser } = useContext(UserContext);

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const [currentUser, setCurrentUser] = useState()

    const [existingPackages, setExistingPackages] = useState()

    const [newPackage, setNewPackage] = useState({
        package: null,
        sq_ft_min: null,
        sq_ft_max: null,
        price: null,
        photographerId: userId
    })

    function handleChange(field, value) {
        setNewPackage(prevState => {
            return {
                ...prevState,
                [field]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        setModalIsOpen(false);
        API.createNewPackage(userId, newPackage)
            .then(res => setExistingPackages(prevState => setExistingPackages(res.data)))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (userId) {
            API.getUserData(userId)
                .then(res => setCurrentUser(res.data))
                .catch(err => console.log(err))
        }
    }, [])

    useEffect(() => {
        if (userId) {
            API.getPackageData(userId)
                .then(res => setExistingPackages(res.data))
                .catch(err => console.log(err))
        }
    }, [])

    console.log(existingPackages);

    return (
        <div>
            {!currentUser ? <h1>Loading...</h1> :
                <div className="availability-setup-container">
                    <div className="availability-setup-container-header">
                        <h1>Set up your packages</h1>
                        <button className="new-appointment" onClick={() => setModalIsOpen(true)}>Create New Package</button>
                    </div>

                    {!existingPackages ?
                        <div className="empty-state">
                            <h2>It looks like you haven't created any packages yet.</h2>
                            <button className="new-appointment" onClick={() => setModalIsOpen(true)}>Create New Package</button>
                        </div> :
                        <div>
                            {existingPackages.map((photoPackage) => (
                                <div className="package-container">
                                    <h2>{photoPackage.package}</h2>
                                    <h3 className="package-price">${photoPackage.price}</h3>
                                    <p>{photoPackage.sq_ft_min} sq-ft to {photoPackage.sq_ft_max} sq-ft</p>
                                </div>
                            ))}
                        </div>}

                    <Modal isOpen={modalIsOpen}>
                        <div className="modal-container">
                            <h1 className="modal-header">Create Package</h1>
                            <form className="new-package-form">
                                <label
                                    className="package-form-label"
                                    for="package-name">
                                    Enter a Package Name</label>
                                <input
                                    type="text"
                                    id="package-name"
                                    onChange={(e) => handleChange("package", e.target.value)}
                                />

                                <label
                                    className="package-form-label"
                                    for="sq_ft_min">
                                    What is the minimum square feet?</label>
                                <input
                                    type="number"
                                    id="sq_ft_min"
                                    min="0"
                                    max="99999"
                                    onChange={(e) => handleChange("sq_ft_min", e.target.value)}
                                />

                                <label
                                    className="package-form-label"
                                    for="sq_ft_max">
                                    What is the maximum square feet?</label>
                                <input
                                    type="number"
                                    id="sq_ft_max"
                                    min="0"
                                    max="99999"
                                    onChange={(e) => handleChange("sq_ft_max", e.target.value)}
                                />

                                <label
                                    className="package-form-label"
                                    for="price">
                                    What is the price of this package?</label>
                                <input
                                    type="number"
                                    id="price"
                                    min="0.00"
                                    max="10000.00"
                                    step="0.01"
                                    onChange={(e) => handleChange("price", e.target.value)}
                                />
                            </form>
                            <div className="modal-btn-container">
                                <button id="back-button" onClick={() => setModalIsOpen(false)}>Close</button>
                                <button className="book-btn" onClick={handleSubmit}>Save</button>
                            </div>
                        </div>
                    </Modal>
                </div>
            }

        </div>
    )
}
