import React from 'react';
import { Inject, ScheduleComponent, Day, Week, Month, Agenda } from '@syncfusion/ej2-react-schedule';

export function CalendarComponent() {
    return (
        <div>
            <ScheduleComponent>
                <Inject services={[Day, Week, Month, Agenda]} />
            </ScheduleComponent>
        </div>
    )
}
