import {
    NEWS_FETCH_REQUEST,
    NEWS_FETCH_SUCCESS,
    NEWS_FETCH_FAIL,
    NEWS_FETCH_RESET,
    NEWS_ADD_REQUEST,
    NEWS_ADD_SUCCESS,
    NEWS_ADD_FAIL
} from '../constant/newsConstant'


export const fetchNewsReducer = (state = {}, action) => {
    switch (action.type) {
        case NEWS_FETCH_REQUEST:
            return { loading: true }
        case NEWS_FETCH_SUCCESS:
            return { loading: false, response: action.payload }
        case NEWS_FETCH_FAIL:
            return { loading: false, error: action.payload }
        case NEWS_FETCH_RESET:
            return {}
        default:
            return state
    }
}


export const addNewsReducer = (state = {}, action) => {
    switch (action.type) {
        case NEWS_ADD_REQUEST:
            return { loading: true }
        case NEWS_ADD_SUCCESS:
            return { loading: false, response: action.payload }
        case NEWS_FETCH_FAIL:
            return { loading: false, error: action.payload }
        case NEWS_ADD_FAIL:
            return {}
        default:
            return state
    }
}