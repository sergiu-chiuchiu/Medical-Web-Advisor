import {
  TOGGLE_LOGIN_DISPLAY,
  TOGGLE_REGISTER_DISPLAY,
  USER_LOGIN,
} from "./ActionTypes";
import { baseUrl, corsProxy } from "../config/endpoints";
import Cookies from "js-cookie";

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

  return dispatch => {
    return fetch(`${corsProxy}${baseUrl}/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
         credentials: 'include',
      },
      body: JSON.stringify(authData)
    })
      .then(response => {
        return response.json();
      })
      .then(res => {
        Cookies.set('my_key', res["sessionId"])
        dispatch({
          type: USER_LOGIN,
          payload: {
            userAuthenticated: true
          }
        });
      });
  };
};

export const submitRegister = registerData => {
  return dispatch => {
    return fetch(`${corsProxy}${baseUrl}/user`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(registerData)
    })
  };
};
