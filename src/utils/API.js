import axios from "axios";
const headers = {
  "Content-Type": "application/json"
};
const burl = "http://localhost:8800";
// eslint-disable-next-line 
export default {
  /**
   * create user datas in local storage
   * @param email
   * @param password
   * @returns {Promise<AxiosResponse<any>>}
   */
  login: function(email, password) {
    return axios.post(
      `${burl}/user/login`,
      {
        email,
        password
      },
      {
        headers: headers
      }
    );
  },
  signup: function(send) {
    return axios.post(`${burl}/user/signup`, send, { headers: headers });
  },

  /**
   * Returns if user is authenticated in local datas
   * @returns {boolean}
   */
  isAuth: function() {
    return localStorage.getItem("token") !== null;
  },
  /**
   * Remove user local datas
   */
  logout: function() {
    localStorage.clear();
  }
};