
import {
    REPORTER_FETCH_REQUEST,
    REPORTER_FETCH_SUCCESS,
    REPORTER_FETCH_FAIL,
    REPORTER_FETCH_RESET,
    REPORTER_REQUEST_SUCCESS,
    REPORTER_REQUEST_FAIL
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
                token: sessionStorage['token'],
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


export const handleReporterRequest = (email, type) => {

    return (dispatch) => {
        dispatch({
            type: REPORTER_FETCH_REQUEST,
        })

        const header = {
            headers: {
                'Content-Type': 'application/json',
                token: sessionStorage['token'],
            },
        }
        console.log("handleReporterRequest -> sessionStorage['token']", sessionStorage['token'])

        const body = {
            email: email,
            type: type
        }
        console.log("handleReporterRequest -> body", body)

        const url = BASE_URL + BASE_PORT + '/admin/handlerequest'
        console.log("handleReporterRequest -> url", url)
        axios
            .post(url, body, header)
            .then((response) => {
                dispatch({
                    type: REPORTER_REQUEST_SUCCESS,
                    payload: response.data,
                })
            })
            .catch((error) => {
                dispatch({
                    type: REPORTER_REQUEST_FAIL,
                    payload: error,
                })
            })
    }
}