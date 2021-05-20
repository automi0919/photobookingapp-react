import React from 'react';

const AppointmentContext = React.createContext({
    street: '',
    city: '',
    state: '',
    zip: ''
})

export default AppointmentContext;