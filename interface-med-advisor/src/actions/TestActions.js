import { EXAMPLE_ACTION } from './ActionTypes'

export const clickTest = testString => {
    return {
    type: EXAMPLE_ACTION,
    payload: testString
}};