import axios from "axios";


const WEB_URL = "https://unity-backend.herokuapp.com/"
const API_URL = WEB_URL+"api/v1/";

const register = (username, email, password) => {

  let values = {
    "username": username,
    "email": email,
    "password": password
   };

  let json_values = JSON.stringify(values)

  return axios({
    method: 'post',
    header: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    //mode: 'no-cors',
    url: API_URL + 'users/',
    data: json_values
  })
};

const login = (username, password) => {
  let values = {
    "username": username,
    "password": password
   };

  let json_values = JSON.stringify(values)
  
  return axios({
    method: 'post',
    header: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    //mode: 'no-cors',
    url: API_URL + 'users/login/',
    data: json_values
  }).then((response) => {
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("isAuthenticated", "true");
    }
    return response.data;
  });

  /*return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });*/
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("isAuthenticated");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
