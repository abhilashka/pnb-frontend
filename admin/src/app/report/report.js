import React, { Component } from 'react';

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReports } from '../../actions/reportAction';
import { Link } from 'react-router-dom';
import { store } from '../../store';


export const Report = (props) => {

    const dispatch = useDispatch()
    const report = useSelector((store) => store.reports)
    const { error, response, loading } = report

    useEffect(() => {
        dispatch(getReports())
    }, [])

    useEffect(() => { }, [error, response, loading])



    return (
        <div>
            <h1>hello</h1>
        </div>
    )

}



