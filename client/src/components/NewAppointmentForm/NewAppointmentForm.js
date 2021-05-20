import React from 'react';
import { useForm } from 'react-hook-form';
import './styles.css';

const availability = ['9:00 - 10:30', '11:00 - 12:30', '1:00 - 2:30', '3:00 - 4:30', '5:00 - 6:30'];
const appointments = ['11:00 - 12:30'];

let availabilityList = availability.filter((slot) => !appointments.includes(slot));

export function NewAppointmentForm() {
    const [formStep, setFormStep] = React.useState(0)
    const { watch, register } = useForm()

    const completeFormStep = () => {
        setFormStep(cur => cur + 1)
    }

    const renderButton = () => {
        if (formStep > 1) {
            return undefined
        } else if (formStep === 1) {
            return (
                <button
                    onClick={completeFormStep}
                    type="button"
                >
                    Book Appointment
                </button>
            )
        } else {
            return (
                <button
                    onClick={completeFormStep}
                    type="button"
                >
                    Next Step
                </button>
            )
        }
    }

    return (

        <div className="choose-time-container">
            <form>
                {formStep === 0 && (
                    <section>
                        <h2>Choose an Appointment Time</h2>
                        <div className="choose-time-button-container">
                            {availabilityList.map((slot) =>
                            (
                                <>
                                    <input
                                        type="radio"
                                        id={slot}
                                        value="true"
                                        name="appointmentSelection"
                                        {...register(slot)}
                                    />
                                    <span>{slot}</span>
                                </>
                            )
                            )}
                        </div>
                    </section>
                )}
                {formStep === 1 && (<section>
                    <h2>Enter Your Information</h2>
                    <div className="choose-time-button-container">
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="Enter your first name"
                            {...register("firstName", {
                                required: "Please enter your first name",
                            })}
                        />
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Enter your last name"
                            {...register("lastName", {
                                required: "Please enter your last name",
                            })}

                        />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            {...register("email", {
                                required: "Please enter your email",
                            })}

                        />
                        <input
                            type="checkbox"
                            name="realtor"
                            id="realtor"
                            {...register("realtor")}
                        />
                        <span>
                            Are you a realtor?
                        </span>
                    </div>
                </section>
                )}
                {formStep === 2 && (<section>
                    <h2>Your Appointment Has Been Scheduled!</h2>
                    <p>Address <span>4107 Winding Valley Dr, Smyrna, GA 30082</span></p>
                    <p>Date <span>March 1st, 2021</span></p>
                    <p>Time <span>3:00PM</span></p>
                </section>
                )}
                {renderButton()}
                <pre>
                    {JSON.stringify(watch(), null, 2)}
                </pre>
            </form>
        </div>
    );
}

