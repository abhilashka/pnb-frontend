import React, { Component } from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../actions/userAction';
import { Link } from 'react-router-dom';
import { store } from '../../store';


export const Profile = (props) => {

    const dispatch = useDispatch()
    const users = useSelector((store) => store.users)
    const { error, response, loading } = users
    console.log("User -> response", response)

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    useEffect(() => { }, [error, response, loading])

    const title = "hello"


    return (
        <div>


            <h1>profile works</h1>

        </div>
    )

}







