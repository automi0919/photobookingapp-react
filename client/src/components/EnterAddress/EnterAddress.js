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
        console.log(appointmentData);
    }

    function handleSubmit(e) {
        e.preventDefault();

        // let options = {
        //     method: 'GET',
        //     url: 'https://mashvisor-api.p.rapidapi.com/property',
        //     params: {
        //         state: appointmentData.state,
        //         zip_code: appointmentData.zip,
        //         address: appointmentData.street,
        //         city: appointmentData.city
        //     },
        //     headers: {
        //         'x-rapidapi-key': 'a28485e035mshea53364c530bf58p1f6a19jsn9a5ad2a4ac17',
        //         'x-rapidapi-host': 'mashvisor-api.p.rapidapi.com'
        //     }
        // };
        // // history.push('/book/select-date');
        // API.getAddress(options)
        //     .then(res => {
        //         setAppointmentData(prevState => {
        //             return {
        //                 ...prevState,
        //                 sq_ft: res.data.content.sqft
        //             }
        //         })
        //     })
        //     .then(
        //         history.push('/book/confirm-package')
        //     )
        //     .catch(err => console.log(err))

        setAppointmentData(prevState => {
            return {
                ...prevState,
                sq_ft: 1700
            }
        })

        history.push('/book/confirm-package')
    }

    return (
        <div className="page-wrapper">
            <div className="book-wrapper">
                <div className="left-third">
                    <div>

                    </div>
                </div>
                <div className="right-two-thirds">
                    <div className="header">
                        <h1>Enter The Property Address</h1>
                    </div>
                    <form>
                        <div className="street-input">
                            <input
                                type="text"
                                name="streetAddress"
                                placeholder="Enter the street address"
                                onChange={(e) => handleChange("street", e.target.value)}
                            />
                        </div>
                        <div className="city-street-zip-input">
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                onChange={(e) => handleChange("city", e.target.value)}
                            />
                            <select onChange={(e) => handleChange("state", e.target.value)}>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                            <input
                                type="text"
                                name="zip"
                                placeholder="Zip Code"
                                onChange={(e) => handleChange("zip", e.target.value)}
                            />
                        </div>
                    </form>
                    <button onClick={handleSubmit}>NEXT STEP</button>
                </div>
            </div>
        </div>
    )
}