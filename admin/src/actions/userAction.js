
import {
    USER_FETCH_REQUEST,
    USER_FETCH_SUCCESS,
    USER_FETCH_FAIL,
    USER_FETCH_RESET,
    BLOCK_USER_REQUEST,
    BLOCK_USER_SUCCESS,
    BLOCK_USER_FAIL,
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
                token: sessionStorage['token'],
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


export const blockUser = (email, isActive) => {
    console.log("blockUser -> email, isActive", email, isActive)
    return (dispatch) => {
        dispatch({
            type: BLOCK_USER_REQUEST,
        })

        const header = {
            headers: {
                'Content-Type': 'application/json',
                token: sessionStorage['token'],
            },
        }

        const body = {
            email,
            isActive
        }

        const url = BASE_URL + BASE_PORT + '/admin/blockuser'
        axios
            .put(url, body, header)
            .then((response) => {
                dispatch({
                    type: BLOCK_USER_SUCCESS,
                    payload: response.data,
                })
            })
            .catch((error) => {
                dispatch({
                    type: BLOCK_USER_FAIL,
                    payload: error,
                })
            })
    }
}


