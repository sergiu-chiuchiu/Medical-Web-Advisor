import {
  TOGGLE_LOGIN_DISPLAY,
  TOGGLE_REGISTER_DISPLAY,
  USER_LOGIN,
  SUBMIT_REGISTER
} from "./ActionTypes";

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
    return fetch("https://jsonplaceholder.typicode.com/todos/1",
    {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(authData)
    })
      .then(response => response.json())
      .then(res => {
          dispatch({
            type: USER_LOGIN,
            payload: {
              userAuthenticated: true,
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
