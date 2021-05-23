import axios from "axios";

export default {
  getAddress: function (options) {
    return axios.request(options)
  },
  saveAppointment: function (appointmentData) {
    return axios.post("/api/appointments", appointmentData);
  },
  getAppointments: async function (appointmentData) {
    return await axios.get("/api/appointments", {
      params: {
        date: appointmentData.date
      }
    });
  }
}