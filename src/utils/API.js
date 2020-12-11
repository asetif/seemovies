import axios from "axios";

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
    );
  },
  signup: function(send) {
    return axios.post(`http://localhost:8800/user/signup`, send);
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
    console.log("on as clear le cookie")
    localStorage.clear();
  }
};