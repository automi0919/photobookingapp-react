import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../../utils/UserContext';
import API from '../../../utils/API';
import { Inject, ScheduleComponent, Day, Week, Month } from '@syncfusion/ej2-react-schedule';
import "./CalendarComponent.css";
import LoadingAnimation from '../../../assets/loading-icon-animated-gif-6.jpeg';
var dayjs = require('dayjs')

export function CalendarComponent() {

    const { userId } = useContext(UserContext);

    const [appointmentList, setAppointmentList] = useState([])

    const [currentUser, setCurrentUser] = useState()

    // useEffect(() => {
    //     if (userId) {
    //         API.getDashboardData(userId)
    //             .then(res => {
    //                 let formattedRes = res.data.map(appointment => {
    //                     if (appointment.status === 'active') {
    //                         console.log(appointment)
    //                         const splitDate = appointment.date.split('-')
    //                         const splitStartTime = appointment.startTime.split(":");
    //                         const splitEndTime = appointment.endTime.split(":");
    //                         return {
    //                             Subject: appointment.package,
    //                             EndTime: new Date(splitDate[0], splitDate[1] - 1, splitDate[2], splitEndTime[0], splitEndTime[1]),
    //                             StartTime: new Date(splitDate[0], splitDate[1] - 1, splitDate[2], splitStartTime[0], splitStartTime[1]),
    //                             Location: `${appointment.street} ${appointment.city} ${appointment.state} ${appointment.zip}`,
    //                             Description: `Client Name: ${appointment.firstName} ${appointment.lastName}| Client Email: ${appointment.email}`,
    //                             Id: `${appointment._id}`
    //                         }
    //                     }
    //                 })
    //                 formattedRes = formattedRes.filter(x => x !== undefined);
    //                 console.log(formattedRes)
    //                 setAppointmentList(formattedRes)
    //             })
    //             .catch(err => console.log(err));
    //     }
    // }, [userId]);

    useEffect(() => {
        if (userId) {
            API.getDashboardData(userId)
                .then(res => {
                    // console.log(res.data)
                    let rawStartTime = res.data[0].startTime;
                    // console.log(rawStartTime);
                    let formattedStartTime = dayjs(rawStartTime).format('MM/DD/YYYY')
                    // console.log(formattedStartTime);

                    let formattedHourMinute = dayjs(rawStartTime).format('hh:mm A')
                    // console.log(formattedHourMinute);

                    console.log(`${formattedStartTime} ${formattedHourMinute}`)
                    let formattedRes = res.data.map(appointment => {
                        if (appointment.status === 'active') {
                            console.log(appointment)
                            const startTime = dayjs(appointment.startTime).format('YYYY/MM/DD hh:mm A')
                            const endTime = dayjs(appointment.endTime).format('YYYY/MM/DD hh:mm A')
                            console.log(startTime);
                            console.log(endTime);
                            // let formattedStartDate = dayjs(appointment.startTime).format('YYYY/DD/MM');
                            // console.log(formattedStartDate)
                            // let formattedHour = dayjs(appointment.startTime).format('hh:mm A');
                            // console.log(formattedHour)

                            // let startTime = `${formattedStartDate} ${formattedHour}`
                            // console.log(startTime)
                            //         const splitDate = appointment.date.split('-')
                            //         const splitStartTime = appointment.startTime.split(":");
                            //         const splitEndTime = appointment.endTime.split(":");
                            return {
                                Subject: appointment.package,
                                EndTime: endTime,
                                StartTime: startTime,
                                Location: `${appointment.street} ${appointment.city} ${appointment.state} ${appointment.zip}`,
                                Description: `Client Name: ${appointment.firstName} ${appointment.lastName}| Client Email: ${appointment.email}`,
                                Id: `${appointment._id}`
                            }
                        }
                    })
                    formattedRes = formattedRes.filter(x => x !== undefined);
                    console.log(formattedRes)
                    setAppointmentList(formattedRes)
                })
                .catch(err => console.log(err));
        }
    }, [userId]);

    const localData = {
        dataSource: appointmentList
    }

    const updateEvent = (id, action) => {
        API.cancelEvent(id)
            .then(res => window.location.reload(false))
            .catch(err => console.log(err))
    }

    const template = () => {
        return (
            <div className="editor-container">
                {/* <div className="appointment-content-container">
                    <label for="subject" value="Package" />
                    <input id="subject" type="text" value={appointmentList[0].Subject} placeholder={appointmentList[0].Subject} />
                </div> */}
                <div className='btn-container'>
                    <div className="delete-btn-container">
                        <button className="delete-btn" value={appointmentList._id} onClick={(e) => updateEvent(e.target.form.attributes[3].value, "cancel")}>CANCEL APPOINTMENT</button>
                    </div>
                    {/* <div className="save-cancel-btn-container">
                        <button value={appointmentList._id} onClick={(e) => updateEvent(e.target.form.attributes[3].value, "update")}>SAVE</button>
                        <button value={appointmentList._id} onClick={(e) => deleteEvent(e)}>BACK</button>
                    </div> */}
                </div>
            </div>);
    }

    useEffect(() => {
        if (userId) {
            API.getUserData(userId)
                .then(res => setCurrentUser(res.data))
                .catch(err => console.log(err))
        }
    }, [])

    return (
        <div>
            {!currentUser ?
                <div className="loading">
                    <img src={LoadingAnimation} width="100" />
                </div>
                :
                <div>
                    <ScheduleComponent allowDragAndDrop={false} width='100%' height='650px' startHour='06:00' endHour='24:00' workHours={{ highlight: true, start: currentUser.openingTime, end: currentUser.closingTime }}
                        eventSettings={localData} editorTemplate={template}>
                        <Inject services={[Day, Week, Month]} />
                    </ScheduleComponent>
                </div>}
        </div>
    )
}
