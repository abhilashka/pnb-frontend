import {
    REPORTER_FETCH_REQUEST,
    REPORTER_FETCH_SUCCESS,
    REPORTER_FETCH_FAIL,
    REPORTER_FETCH_RESET,
    REPORTER_REQUEST_SUCCESS,
    REPORTER_REQUEST_FAIL
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


export const handleReporterReducer = (state = {}, action) => {
    switch (action.type) {
        case REPORTER_REQUEST_SUCCESS:
            return { loading: false, response: action.payload }
        case REPORTER_REQUEST_FAIL:
            return { loading: false, error: action.payload }
            return {}
        default:
            return state
    }
}