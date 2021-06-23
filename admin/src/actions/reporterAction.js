
import {
    REPORTER_FETCH_REQUEST,
    REPORTER_FETCH_SUCCESS,
    REPORTER_FETCH_FAIL,
    REPORTER_FETCH_RESET,
} from '../constant/reporterConstants'

import axios from 'axios'
import { BASE_URL, BASE_PORT } from '../constant/base'



export const getReporterRequests = () => {
    return (dispatch) => {
        dispatch({
            type: REPORTER_FETCH_REQUEST,
        })

        const header = {
            headers: {
                'Content-Type': 'application/json',
                // token: sessionStorage['token'],
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsImlzQWN0aXZlIjoxLCJpYXQiOjE2MjM4MjgxMjN9.DvAdMOaCXvadluspauIZxxTqRyi-KEpfMdXX6RHD-2Q'
            },
        }

        const url = BASE_URL + BASE_PORT + '/admin/reporter-request'
        axios
            .get(url, header)
            .then((response) => {
                dispatch({
                    type: REPORTER_FETCH_SUCCESS,
                    payload: response.data,
                })
            })
            .catch((error) => {
                dispatch({
                    type: REPORTER_FETCH_FAIL,
                    payload: error,
                })
            })
    }
}


