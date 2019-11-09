import { EXAMPLE_ACTION } from "../actions/ActionTypes"

const initialState = {
    testString: "initialStr"
}

const Example = (state = initialState, action) => {
    switch (action.type) {
        case EXAMPLE_ACTION:
            return {
                ...state,
                testString: action.payload
            }
        default:
            return state;
    }
}

export default Example;