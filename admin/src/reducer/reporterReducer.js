import {
    REPORTER_FETCH_REQUEST,
    REPORTER_FETCH_SUCCESS,
    REPORTER_FETCH_FAIL,
    REPORTER_FETCH_RESET,
} from '../constant/reporterConstants'






export const fetchReporterReducer = (state = {}, action) => {
    switch (action.type) {
        case REPORTER_FETCH_REQUEST:
            return { loading: true }
        case REPORTER_FETCH_SUCCESS:
            return { loading: false, response: action.payload }
        case REPORTER_FETCH_FAIL:
            return { loading: false, error: action.payload }
        case REPORTER_FETCH_RESET:
            return {}
        default:
            return state
    }
}