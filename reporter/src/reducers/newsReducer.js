import {
    NEWS_FETCH_REQUEST,
    NEWS_FETCH_SUCCESS,
    NEWS_FETCH_FAIL,
    NEWS_FETCH_RESET,
} from '../constant/newsConstant'






export const fetchNEWSsReducer = (state = {}, action) => {
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