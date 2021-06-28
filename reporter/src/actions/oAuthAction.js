import {
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNOUT,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL
} from '../constant/oAuthConstant'

import axios from 'axios'
import { BASE_URL, BASE_PORT } from '../constant/base'
import { toast } from 'react-toastify';



export const logout = () => {
    console.log('hello logout')
    toast.success('Login Successfull, Welcome', { autoClose: 2000 }, { position: toast.POSITION.TOP_LEFT })

    sessionStorage.clear()

    document.location.href = '/login'

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
        const url = BASE_URL + BASE_PORT + '/oAuth/signin'
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



export const signup = (firstname, lastname, phone, email, password, city, locality, state, pincode, type) => {
    if (type == "Reporter") { type = "REP" } else { type = "RED" }
    console.log("signup -> irstname, lastname, mobile, email, password, city, locality, state, pincode", firstname, lastname, phone, email, password, city, locality, state, pincode, type)
    return (dispatch) => {
        dispatch({
            type: USER_SIGNUP_REQUEST,
        })

        const header = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const body = {

            first_name: firstname,
            last_name: lastname,
            phone: phone,
            email: email,
            password: password,
            city: city,
            localities: locality,
            state: state,
            pincode: pincode,
            type: type
        }
        const url = BASE_URL + BASE_PORT + '/oAuth/signup'
        axios
            .post(url, body, header)
            .then((response) => {
                dispatch({
                    type: USER_SIGNUP_SUCCESS,
                    payload: response.data,
                })
            })
            .catch((error) => {
                dispatch({
                    type: USER_SIGNUP_FAIL,
                    payload: error,
                })
            })
    }
}
