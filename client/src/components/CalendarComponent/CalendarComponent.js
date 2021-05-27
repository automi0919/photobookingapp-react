import React from 'react';
import { Inject, ScheduleComponent, Day, Week, Month } from '@syncfusion/ej2-react-schedule';

export function CalendarComponent() {
    return (
        <div>
            <ScheduleComponent width='100%' height='650px' startHour='08:00' endHour='20:00' workHours={{ highlight: true, start: '08:00', end: '20:00' }}>
                <Inject services={[Day, Week, Month]} />
            </ScheduleComponent>
        </div>
    )
}
