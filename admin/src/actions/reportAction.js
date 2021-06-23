
import {
    REPORT_FETCH_REQUEST,
    REPORT_FETCH_SUCCESS,
    REPORT_FETCH_FAIL,
    REPORT_FETCH_RESET,
} from '../constant/reportConstants'

import axios from 'axios'
import { BASE_URL, BASE_PORT } from '../constant/base'
console.log("BASE_URL", BASE_URL)



export const getReports = () => {
    return (dispatch) => {
        dispatch({
            type: REPORT_FETCH_REQUEST,
        })

        const header = {
            headers: {
                'Content-Type': 'application/json',
                // token: sessionStorage['token'],
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsImlzQWN0aXZlIjoxLCJpYXQiOjE2MjM4MjgxMjN9.DvAdMOaCXvadluspauIZxxTqRyi-KEpfMdXX6RHD-2Q'
            },
        }

        const url = BASE_URL + BASE_PORT + '/admin/report'
        console.log("getReports -> url", url)
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


