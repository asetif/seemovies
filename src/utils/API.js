import axios from "axios";

const burl = "http://localhost:8800";
// eslint-disable-next-line 
export default {
  login: function(email, password) {
    return axios.post(
      `${burl}/user/login`,
      {
        email,
        password
      },
    );
  },
  signup: function(send) {
    return axios.post(`http://localhost:8800/user/signup`, send);
  },

  isAuth: function() {
    return localStorage.getItem("token") !== null;
  },
  logout: function() {
    localStorage.clear();
  }
};