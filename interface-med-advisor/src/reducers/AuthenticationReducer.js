import { TOGGLE_LOGIN_DISPLAY, TOGGLE_REGISTER_DISPLAY, USER_LOGIN } from "../actions/ActionTypes";

const initialState = {
  isLoginDisplayed: false,
  isRegisterDisplayed: false,
  userAuthenticated: false,
  title: ""
};

const AuthenticationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_LOGIN_DISPLAY:
      return {
        ...state,
        isLoginDisplayed: !state.isLoginDisplayed
      };
    case TOGGLE_REGISTER_DISPLAY:
      return {
        ...state,
        isRegisterDisplayed: !state.isRegisterDisplayed
      };
    case USER_LOGIN:
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
};

export default AuthenticationReducer;
