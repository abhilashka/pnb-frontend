import React, { Component, useState } from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../actions/profileAction';
import { Link } from 'react-router-dom';
import { store } from '../../store';


export const Profile = (props) => {

    const dispatch = useDispatch()
    const profile = useSelector((store) => store.profile)
    const { error, response, loading } = profile
    console.log("Profile -> response", response)

    useEffect(() => {
        dispatch(getProfile())
    }, [])

    useEffect(() => { }, [error, response, loading])
    const [formData,setFormData]=useState()
    
    const handleOnChange =(e)=>{
        setFormData(e.target.value);
    }
                                                // setFormData(response.first_name);


    return (
        <div>

            <div className="row ">
                <div className="col-12 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">User Details</h4>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>FirstName</th>
                                            <th>LastName</th>
                                            <th>Phone</th>
                                            <th>Email</th>
                                            <th>Password</th>
                                            <th>City</th>
                                            <th>State</th>
                                            <th>Pincode</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                    response &&

                                            response.data &&
                                            response.data.length > 0 &&
                                            response.data.map((note, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td >{note.first_name}</td>
                                                        <td>{note.last_name}</td>
                                                        <td>{note.phone}</td>
                                                        <td>{note.email}</td>
                                                        <td>{note.passwd}</td>
                                                        <td>{note.city}</td>
                                                        <td>{note.state}</td>
                                                        <td>{note.pincode}</td>
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




