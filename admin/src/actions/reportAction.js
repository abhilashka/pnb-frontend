
import {
    REPORT_FETCH_REQUEST,
    REPORT_FETCH_SUCCESS,
    REPORT_FETCH_FAIL,
    REPORT_FETCH_RESET,
    REPORT_NEWS_SUCCESS,
    REPORTER_NEWS_FAIL,
    REPORT_NEWS_FETCH_REQUEST
} from '../constant/reportConstants'

import axios from 'axios'
import { BASE_URL, BASE_PORT } from '../constant/base'



export const getReports = () => {
    return (dispatch) => {
        dispatch({
            type: REPORT_FETCH_REQUEST,
        })

        const header = {
            headers: {
                'Content-Type': 'application/json',
                token: sessionStorage['token']
            },
        }

        const url = BASE_URL + BASE_PORT + '/admin/report'
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


export const toggleNews = (id, type) => {
    console.log("toggleNews -> id, type", id, type)

    return (dispatch) => {
        dispatch({
            type: REPORT_NEWS_SUCCESS,
        })

        const header = {
            headers: {
                'Content-Type': 'application/json',
                token: sessionStorage['token'],
            },
        }
        const body = {
            id: id,
            type: type
        }

        const url = BASE_URL + BASE_PORT + '/admin/handlenews'
        console.log("toggleNews -> url", url)
        axios
            .post(url, body, header)
            .then((response) => {
                dispatch({
                    type: REPORT_NEWS_SUCCESS,
                    payload: response.data,
                })
            })
            .catch((error) => {
                dispatch({
                    type: REPORTER_NEWS_FAIL,
                    payload: error,
                })
            })
    }
}
