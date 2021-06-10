import axios from "axios";

export default {
  cancelEvent: function (id) {
    return axios.post(`/api/appointments/cancel/:${id}`, {
      params: {
        _id: id
      }
    })
  },
  getAuthToken: function() {
      return window.localStorage.getItem('token');
  }
}
