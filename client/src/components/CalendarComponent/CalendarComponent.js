import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../utils/UserContext';
import API from '../../utils/API';
import { Inject, ScheduleComponent, Day, Week, Month, EventSettingsModel } from '@syncfusion/ej2-react-schedule';

export function CalendarComponent() {

    const { userEmail, userId, isAuthenticated, updateUser } = useContext(UserContext);

    const [appointmentList, setAppointmentList] = useState([])

    //     city: "Atlanta"
    // date: "2021-05-29"
    // email: "mknowlton89@gmail.com"
    // endTime: "10:30"
    // firstName: "Michael"
    // lastName: "Knowlton"
    // package: "standard-home"
    // photographerId: "60ad8aeede0d7a0f6d75a3b3"
    // price: "$199"
    // realtor: true
    // sq_ft: 1700
    // startTime: "9:00"
    // state: "GA"
    // street: "1966 McJenkins St"
    // zip: "30339"

    useEffect(() => {
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
                        Description: `Client Name: ${appointment.firstName} ${appointment.lastName}| Client Number: 770-843-4662`,
                    }
                })
                setAppointmentList(formattedRes)
            })
            // .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }, []);



    // let localData: EventSettingsModel = {
    //     dataSource: [{
    //         Subject: "Small Home",
    //         EndTime: new Date(2021, 4, 28, 12, 30),
    //         StartTime: new Date(2021, 4, 28, 14, 0),
    //         Location: "4107 Winding Valley Dr, Smyrna, GA 30082",
    //         Description: "Client Name: Michael Knowlton | Client Number: 770-843-4662",
    //     }]
    // }

    const localData = {
        dataSource: appointmentList
    }

    console.log(appointmentList)

    return (
        <div>
            <ScheduleComponent width='100%' height='650px' startHour='08:00' endHour='20:00' workHours={{ highlight: true, start: '08:00', end: '20:00' }}
                eventSettings={localData}>
                <Inject services={[Day, Week, Month]} />
            </ScheduleComponent>
        </div>
    )
}
