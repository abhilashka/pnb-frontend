
import {
    PROFILE_FETCH_REQUEST,
    PROFILE_FETCH_SUCCESS,
    PROFILE_FETCH_FAIL,
    PROFILE_FETCH_RESET,
} from '../constant/profileConstants'

import axios from 'axios'
import { BASE_URL, BASE_PORT } from '../constant/base'



export const getProfile = () => {
    return (dispatch) => {
        dispatch({
            type: PROFILE_FETCH_REQUEST,
        })

        const header = {
            headers: {
                'Content-Type': 'application/json',
                token: sessionStorage['token'],
            },
        }

        const url = BASE_URL + BASE_PORT + '/admin/getprofile'
        axios
            .get(url, header)
            .then((response) => {
                dispatch({
                    type: PROFILE_FETCH_SUCCESS,
                    payload: response.data,
                })
            })
            .catch((error) => {
                dispatch({
                    type: PROFILE_FETCH_FAIL,
                    payload: error,
                })
            })
    }
}


