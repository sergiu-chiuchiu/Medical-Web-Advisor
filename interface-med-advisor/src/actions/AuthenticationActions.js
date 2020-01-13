import {
  TOGGLE_LOGIN_DISPLAY,
  TOGGLE_REGISTER_DISPLAY,
  USER_LOGIN,
  SUBMIT_REGISTER
} from "./ActionTypes";
import {baseUrl, corsProxy} from "../config/endpoints"

export const toggleLoginDisplay = () => {
  return {
    type: TOGGLE_LOGIN_DISPLAY
  };
};

export const toggleRegisterDisplay = () => {
  return {
    type: TOGGLE_REGISTER_DISPLAY
  };
};

export const submitLogin = authData => {
  authData.userName = "testUser";
  authData.name = "tester";
  console.log("mmmmm", authData)
  return dispatch => {
    return fetch(`${corsProxy}${baseUrl}/user`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
      },
      body: JSON.stringify(authData)
    })
      .then(response => response.json())
      .then(res => {
          dispatch({
            type: USER_LOGIN,
            payload: {
              userAuthenticated: true,
              email: res.email
            }
          });
      });
  };
};

export const submitRegister = () => {
  return {
    type: SUBMIT_REGISTER
  };
};
