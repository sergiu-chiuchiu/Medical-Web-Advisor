import { combineReducers } from "redux";
import Example from "./Example"
import AuthenticationReducer from "./AuthenticationReducer"
import RssFeedReducer from './RssFeedReducer'

export default combineReducers({
    example: Example,
    authentication: AuthenticationReducer,
    rssFeed: RssFeedReducer,
})