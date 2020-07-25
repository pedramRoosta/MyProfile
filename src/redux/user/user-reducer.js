import {types} from'./user-action-types'
const INITIAL_STATE = {
    currentUser: null
}
const userReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SET_CURRENT_USER:
            return {
                ...currentState,
                currentUser: action.payload
            }
        default:
            return currentState;
    }
}
export default userReducer;