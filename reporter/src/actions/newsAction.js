
import {
    NEWS_FETCH_REQUEST,
    NEWS_FETCH_SUCCESS,
    NEWS_FETCH_FAIL,
    NEWS_FETCH_RESET,
    NEWS_ADD_REQUEST,
    NEWS_ADD_SUCCESS,
    NEWS_ADD_FAIL
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

        const url = BASE_URL + BASE_PORT + '/news/newsbyaddress'
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


export const getAllNews = () => {
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

        const url = BASE_URL + BASE_PORT + '/news/'
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


export const showDetails = (id) => {
    console.log("showDetails -> id", id)

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

        const body = {
            id
        }
        console.log("showDetails -> body", body)

        const url = BASE_URL + BASE_PORT + '/news/getnewsbyid'
        axios
            .post(url, body, header)
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



export async function addNews({ image, title, content, category }) {
    const formData = new FormData();
    formData.append("image", image)
    formData.append("headline", title)
    formData.append("content", content)
    formData.append("category", category)
    const url = BASE_URL + BASE_PORT + '/news/addnews'

    const result = await axios.post(url, formData, { headers: { 'Content-Type': 'multipart/form-data', token: sessionStorage['token'] } })
    return result.data
}

export const getNewsByCategory = (category) => {
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

        const body = {
            category
        }

        const url = BASE_URL + BASE_PORT + '/news/newsbycategory'
        axios
            .post(url, body, header)
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