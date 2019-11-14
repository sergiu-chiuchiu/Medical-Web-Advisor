import { TOGGLE_LOGIN_DISPLAYED } from "../actions/ActionTypes"

const initialState = {
    isLoginDisplayed: false,
}

const AuthenticationReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TOGGLE_LOGIN_DISPLAYED:
            return {
                ...state,
                isLoginDisplayed: !state.isLoginDisplayed
            }
        default:
            return state;
    }
}

export default AuthenticationReducer;