import React, { Component, useState } from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, blockUser  } from '../../actions/userAction';
import Switch from '@material-ui/core/Switch';




export const User = (props) => {

    const dispatch = useDispatch()
    const users = useSelector((store) => store.users)
    const { error, response, loading } = users

    useEffect(() => {
        dispatch(getUsers())
    }, [])


    useEffect(() => { }, [error, response, loading])


    const handleChange = (event) => {

        if (event.target.checked) {
            dispatch(blockUser(event.target.name, 1))


        }
        else {
            dispatch(blockUser(event.target.name, 0))

        }
        dispatch(getUsers())

    };
    return (
        <div>

            <div className="row ">
                <div className="col-12 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Users</h4>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Role</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {response &&
                                            response.data &&
                                            response.data.length > 0 &&
                                            response.data.map((note, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{note.first_name + " " + note.last_name}</td>
                                                        <td>{note.email}</td>
                                                        <td>{note.phone}</td>
                                                        <td>{note.TYPE}</td>
                                                        <td>

                                                            <Switch
                                                                checked={note.isActive}
                                                                onChange={handleChange}
                                                                name={note.email}
                                                            />

                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )

}







