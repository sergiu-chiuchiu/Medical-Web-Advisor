import { EXAMPLE_ACTION } from './ActionTypes'


// export const clickTest = testString => ({
//     type: EXAMPLE_ACTION,
//     payload: testString
//   });


export const clickTest = testString => {
    return {
    type: EXAMPLE_ACTION,
    payload: testString
}};