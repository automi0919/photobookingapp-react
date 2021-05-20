import axios from "axios";

export default {
  getAddress: function (options) {
    return axios.request(options)
  },
  saveAppointment: function (appointmentData) {
    // return axios.post("/api/appointments", appointmentData);
    return fetch('/api/appointments', {
        method: 'POST',
        body: JSON.stringify(appointmentData),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => console.log(data));
  }
}