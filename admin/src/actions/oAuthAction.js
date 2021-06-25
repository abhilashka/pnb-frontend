import {
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNOUT
} from '../constant/oAuthConstant'

import axios from 'axios'
import { BASE_URL, BASE_PORT } from '../constant/base'



export const logout = () => {
    return (dispatch) => {
        sessionStorage.removeItem('token')
        dispatch({ type: USER_SIGNOUT })
        document.location.href = '/signin'
    }
}



export const signin = (email, password) => {
    return (dispatch) => {
        dispatch({
            type: USER_SIGNIN_REQUEST,
        })

        const header = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const body = {
            email,
            password,
        }
        const url = BASE_URL + BASE_PORT + '/admin/signin'
        axios
            .post(url, body, header)
            .then((response) => {
                dispatch({
                    type: USER_SIGNIN_SUCCESS,
                    payload: response.data,
                })
            })
            .catch((error) => {
                dispatch({
                    type: USER_SIGNIN_FAIL,
                    payload: error,
                })
            })
    }
}
