import {
    REPORT_FETCH_REQUEST,
    REPORT_FETCH_SUCCESS,
    REPORT_FETCH_FAIL,
    REPORT_FETCH_RESET,
    REPORT_NEWS_SUCCESS,
    REPORTER_NEWS_FAIL,
    REPORT_NEWS_FETCH_REQUEST
} from '../constant/reportConstants'






export const fetchReportsReducer = (state = {}, action) => {
    switch (action.type) {
        case REPORT_FETCH_REQUEST:
            return { loading: true }
        case REPORT_FETCH_SUCCESS:
            return { loading: false, response: action.payload }
        case REPORT_FETCH_FAIL:
            return { loading: false, error: action.payload }
        case REPORT_FETCH_RESET:
            return {}
        default:
            return state
    }
}



export const toggleNewsReducer = (state = {}, action) => {
    switch (action.type) {
        case REPORT_NEWS_FETCH_REQUEST:
            return { loading: true }
        case REPORT_NEWS_SUCCESS:
            return { loading: false, response: action.payload }
        case REPORTER_NEWS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}