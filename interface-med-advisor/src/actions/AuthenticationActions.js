import { TOGGLE_LOGIN_DISPLAY, TOGGLE_REGISTER_DISPLAY } from "./ActionTypes";

export const toggleLoginDisplay = () => {
  return {
    type: TOGGLE_LOGIN_DISPLAY,
  };
};

export const toggleRegisterDisplay = () => {
  console.log("dsgfds")
  return {
    type: TOGGLE_REGISTER_DISPLAY,
  };
};
