import axios from "axios";

export default {
  getAddress: function (options) {
    return axios.request(options)
  },
  saveAppointment: function (appointmentData) {
    return axios.post("/api/appointments", appointmentData);
  },
  // getAppointments: function (appointmentData) {
  //   return axios.get("/api/appointments", {
  //     date: "2021-05-23"
  //   })
  // },
  getAppointments: async function (appointmentData) {
    return await axios.get("/api/appointments", {
      params: {
        date: appointmentData.date
      }
    });
  }
}