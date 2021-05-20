import React from 'react';
import { NewAppointmentForm } from '../../components/NewAppointmentForm/NewAppointmentForm';
import './styles.css';

export function BookAppointment(){
    return(
        <div className="booking-container">
            <NewAppointmentForm />
        </div>
    )
}