
import {
    USER_FETCH_REQUEST,
    USER_FETCH_SUCCESS,
    USER_FETCH_FAIL,
    USER_FETCH_RESET,
} from '../constant/userConstants'

import axios from 'axios'
import { BASE_URL, BASE_PORT } from '../constant/base'



export const getUsers = () => {
    return (dispatch) => {
        dispatch({
            type: USER_FETCH_REQUEST,
        })

        const header = {
            headers: {
                'Content-Type': 'application/json',
                // token: sessionStorage['token'],
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsImlzQWN0aXZlIjoxLCJpYXQiOjE2MjM4MjgxMjN9.DvAdMOaCXvadluspauIZxxTqRyi-KEpfMdXX6RHD-2Q'
            },
        }

        const url = BASE_URL + BASE_PORT + '/admin/users'
        axios
            .get(url, header)
            .then((response) => {
                dispatch({
                    type: USER_FETCH_SUCCESS,
                    payload: response.data,
                })
            })
            .catch((error) => {
                dispatch({
                    type: USER_FETCH_FAIL,
                    payload: error,
                })
            })
    }
}


