import axios from "axios";

export default {

  getAddress: function (options) {
    return axios.request(options)
  }
}