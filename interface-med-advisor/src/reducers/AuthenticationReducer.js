import { TOGGLE_LOGIN_DISPLAY, TOGGLE_REGISTER_DISPLAY } from "../actions/ActionTypes";

const initialState = {
  isLoginDisplayed: false,
  isRegisterDisplayed: false,
};

const AuthenticationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_LOGIN_DISPLAY:
      return {
        ...state,
        isLoginDisplayed: !state.isLoginDisplayed
      };
    case TOGGLE_REGISTER_DISPLAY:
    console.log("WWWWWWWWWWW")  
    return {
        ...state,
        isRegisterDisplayed: !state.isRegisterDisplayed
      };
    default:
      return state;
  }
};

export default AuthenticationReducer;
