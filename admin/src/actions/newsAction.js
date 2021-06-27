
import {
    NEWS_FETCH_REQUEST,
    NEWS_FETCH_SUCCESS,
    NEWS_FETCH_FAIL,
    NEWS_FETCH_RESET,
} from '../constant/newsConstant'

import axios from 'axios'
import { BASE_URL, BASE_PORT } from '../constant/base'



export const getNews = () => {
    return (dispatch) => {
        dispatch({
            type: NEWS_FETCH_REQUEST,
        })

        const header = {
            headers: {
                'Content-Type': 'application/json',
                token: sessionStorage['token'],
            },
        }

        const url = BASE_URL + BASE_PORT + '/news'
        axios
            .get(url, header)
            .then((response) => {
                dispatch({
                    type: NEWS_FETCH_SUCCESS,
                    payload: response.data,
                })
            })
            .catch((error) => {
                dispatch({
                    type: NEWS_FETCH_FAIL,
                    payload: error,
                })
            })
    }
}


