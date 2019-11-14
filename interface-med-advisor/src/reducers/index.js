import { combineReducers } from "redux";
import Example from "./Example"
import AuthenticationReducer from "./AuthenticationReducer"

export default combineReducers({
    example: Example,
    authentication: AuthenticationReducer
})