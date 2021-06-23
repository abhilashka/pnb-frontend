
import {
    REPORT_FETCH_REQUEST,
    REPORT_FETCH_SUCCESS,
    REPORT_FETCH_FAIL,
    REPORT_FETCH_RESET,
} from '../constant/reportConstants'

import axios from 'axios'



export const getReports = () => {
    return (dispatch) => {
        dispatch({
            type: REPORT_FETCH_REQUEST,
        })

        const header = {
            headers: {
                'Content-Type': 'application/json',
                // token: sessionStorage['token'],
            },
        }

        const url = 'https://jsonplaceholder.typicode.com/todos'
        axios
            .get(url, header)
            .then((response) => {
                dispatch({
                    type: REPORT_FETCH_SUCCESS,
                    payload: response.data,
                })
            })
            .catch((error) => {
                dispatch({
                    type: REPORT_FETCH_FAIL,
                    payload: error,
                })
            })
    }
}


