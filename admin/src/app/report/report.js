import React, { Component } from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReports } from '../../actions/reportAction';
import { Link } from 'react-router-dom';
import { store } from '../../store';


export const Report = (props) => {

    const dispatch = useDispatch()
    const report = useSelector((store) => store.report)
    const { error, response, loading } = report
    // console.log("Report -> response", response.data)

    useEffect(() => {
        dispatch(getReports())
    }, [])

    useEffect(() => { }, [error, response, loading])




    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>completed</th>
                    </tr>
                </thead>
                <tbody>

                    {response &&
                        response.data &&
                        response.data.length > 0 &&
                        response.data.map((note) => {
                            return (
                                <tr>
                                    <td>{note.userId}</td>
                                    <td>{note.id}</td>
                                    <td>{note.title}</td>
                                    <td>{note.completed}</td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )

}



