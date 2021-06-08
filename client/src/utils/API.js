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
  },
  createNewUser: function (newUser) {
    return axios.post("/api/users", newUser);
  },
  createNewPackage: function (id, newPackage) {
    return axios.post("/api/packages/new", newPackage);
  },
  loginUser: function (userLoginData) {
    return axios.get("/api/users/", {
      params: {
        email: userLoginData.email,
        password: userLoginData.password
      }
    });
  },
  getDashboardData: function (userId) {
    return axios.get('/api/appointments/dashboard', {
      params: {
        photographerId: userId
      }
    })
  },
  getUserData: function (userId) {
    return axios.get('/api/users/dashboard', {
      params: {
        _id: userId
      }
    })
  },
  getPackageData: function (userId) {
    console.log(userId)
    return axios.get('/api/packages/', {
      params: {
        _id: userId
      }
    })
  },
  cancelEvent: function (id) {
    return axios.post(`/api/appointments/cancel/:${id}`, {
      params: {
        _id: id
      }
    })
  },
  updateUser: function (id, update) {
    console.log(update)
    return axios.post(`api/users/update/:${id}`, {
      params: {
        _id: id,
        update
      }
    })
  },
  getUserDataByEmail: function (userEmail) {
    return axios.get(`/api/users/${userEmail}`, {
      params: {
        email: userEmail
      }
    })
  },
}
