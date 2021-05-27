import React from 'react';
import { Inject, ScheduleComponent, Day, Week, Month, EventSettingsModel } from '@syncfusion/ej2-react-schedule';

export function CalendarComponent() {

    let localData: EventSettingsModel = {
        dataSource: [{
            Subject: "Small Home",
            EndTime: new Date(2021, 4, 28, 12, 30),
            StartTime: new Date(2021, 4, 28, 14, 0),
            Location: "4107 Winding Valley Dr, Smyrna, GA 30082",
            Description: "Client Name: Michael Knowlton | Client Number: 770-843-4662",
        }]
    }
    return (
        <div>
            <ScheduleComponent width='100%' height='650px' startHour='08:00' endHour='20:00' workHours={{ highlight: true, start: '08:00', end: '20:00' }} currentView="Month"
            eventSettings={localData}>
                <Inject services={[Day, Week, Month]} />
            </ScheduleComponent>
        </div>
    )
}
