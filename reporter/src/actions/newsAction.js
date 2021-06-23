
import {
    NEWS_FETCH_REQUEST,
    NEWS_FETCH_SUCCESS,
    NEWS_FETCH_FAIL,
    NEWS_FETCH_RESET,
} from '../constant/NEWSConstants'

import axios from 'axios'



export const getNews = () => {
    return (dispatch) => {
        dispatch({
            type: NEWS_FETCH_REQUEST,
        })

        const header = {
            headers: {
                'Content-Type': 'application/json',
                // token: sessionStorage['token'],
            },
        }

        const url = 'https://jsonplaceholder.typicode.com/todos'
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


