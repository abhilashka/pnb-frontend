import {
    USER_FETCH_REQUEST,
    USER_FETCH_SUCCESS,
    USER_FETCH_FAIL,
    USER_FETCH_RESET,
} from '../constant/userConstants'






export const fetchUserReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_FETCH_REQUEST:
            return { loading: true }
        case USER_FETCH_SUCCESS:
            return { loading: false, response: action.payload }
        case USER_FETCH_FAIL:
            return { loading: false, error: action.payload }
        case USER_FETCH_RESET:
            return {}
        default:
            return state
    }
}