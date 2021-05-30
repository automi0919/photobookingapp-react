import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../utils/UserContext';
import API from '../../utils/API';
import { Inject, ScheduleComponent, Day, Week, Month, EventSettingsModel } from '@syncfusion/ej2-react-schedule';


export function CalendarComponent() {

    const { userEmail, userId, isAuthenticated, updateUser } = useContext(UserContext);

    const [appointmentList, setAppointmentList] = useState([])

    useEffect(() => {
        if (userId) {
            API.getDashboardData(userId)
                .then(res => {
                    const formattedRes = res.data.map(appointment => {
                        console.log(appointment)
                        const splitDate = appointment.date.split('-')
                        const splitStartTime = appointment.startTime.split(":");
                        const splitEndTime = appointment.endTime.split(":");
                        return {
                            Subject: appointment.package,
                            EndTime: new Date(splitDate[0], splitDate[1] - 1, splitDate[2], splitEndTime[0], splitEndTime[1]),
                            StartTime: new Date(splitDate[0], splitDate[1] - 1, splitDate[2], splitStartTime[0], splitStartTime[1]),
                            Location: `${appointment.street} ${appointment.city} ${appointment.state} ${appointment.zip}`,
                            Description: `Client Name: ${appointment.firstName} ${appointment.lastName}| Client Email: ${appointment.email}`,
                            Id: `${appointment._id}`
                        }
                    })
                    setAppointmentList(formattedRes)
                })
                .catch(err => console.log(err));
        }
    }, [userId]);

    const localData = {
        dataSource: appointmentList
    }

    return (
        <div>
            <ScheduleComponent width='100%' height='650px' startHour='08:00' endHour='20:00' workHours={{ highlight: true, start: '08:00', end: '20:00' }}
                eventSettings={localData}>
                <Inject services={[Day, Week, Month]} />
            </ScheduleComponent>
        </div>
    )
}
