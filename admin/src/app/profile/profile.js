import React, { Component } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../actions/profileAction";
import { Link } from "react-router-dom";
import { store } from "../../store";
import PropTypes from "prop-types";
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input';



// import {
//     Card,
//     CardHeader,
//     ListGroup,
//     ListGroupItem,
//     Row,
//     Col,
//     Form,
//     FormGroup,
//     FormInput,
//     FormSelect,
//     FormTextarea,
//     Button
// } from "shards-react";

export const Profile = ({ profile }) => {

    const dispatch = useDispatch()
    const profile1 = useSelector((store) => store.profile)
    const { error, response, loading } = profile1

    useEffect(() => {
        dispatch(getProfile())
    }, [])

    useEffect(() => { }, [error, response, loading])

    // const title = "k"
    const [formData, setFormData] = useState()

  




    return (
        <div>

                                        {response &&

                                            response.data &&
                                            response.data.length > 0 &&
                                            response.data.map((note, index) => {
                                                return (
                                                    <div>
                                                    <div>
                                                        <div className="page-header">
                                        
                                                      
                                                           
                                                            <div className="col-md-6 grid-margin stretch-card">
                                                                <div className="card">
                                                                    <div className="card-body">
                                                                        <h4 className="card-title">Update Profile</h4>
                                                                        <form className="forms-sample">
                                                                            <div className="row">
                                        
                                                                                <Form.Group >
                                                                                    <label htmlFor="exampleInputUsername2" >Firstname</label>
                                                                                    <Form.Control type="text" className="form-control col-sm-6" id="exampleInputUsername2" value={note.first_name} name="firstName" placeholder="Firstname" />
                                                                                </Form.Group>
                                                                                <Form.Group >
                                                                                    <label htmlFor="exampleInputEmail2" >Lastname</label>
                                        
                                                                                    <Form.Control type="email" className="form-control col-sm-6" id="exampleInputEmail2" value={note.last_name} placeholder="Lastname" />
                                                                                </Form.Group>
                                        
                                                                            </div>
                                                                            <Form.Group className="row">
                                                                                <label htmlFor="exampleInputMobile" className="col-sm-3 col-form-label">Mobile</label>
                                                                                <div className="col-sm-9">
                                                                                    <Form.Control type="text" className="form-control" id="exampleInputMobile" value={note.phone} placeholder="Mobile number" />
                                                                                </div>
                                                                            </Form.Group>
                                                                            <Form.Group className="row">
                                                                                <label htmlFor="exampleInputPassword2" className="col-sm-3 col-form-label">Password</label>
                                                                                <div className="col-sm-9">
                                                                                    <Form.Control type="password" className="form-control" id="exampleInputPassword2" value={note.passwd} placeholder="Password" />
                                                                                </div>
                                                                            </Form.Group>
                                                                            <Form.Group className="row">
                                                                                <label htmlFor="exampleInputConfirmPassword2" className="col-sm-3 col-form-label">Re Password</label>
                                                                                <div className="col-sm-9">
                                                                                    <Form.Control type="password" className="form-control" id="exampleInputConfirmPassword3" value={note.passwd} placeholder="Password" />
                                                                                </div>
                                                                            </Form.Group>
                                                                            <Form.Group className="row">
                                                                                <label htmlFor="exampleInputCity" className="col-sm-3 col-form-label">City</label>
                                                                                <div className="col-sm-9">
                                                                                    <Form.Control type="text" className="form-control" id="exampleInputCity" value={note.city} placeholder="Password" />
                                                                                </div>
                                                                            </Form.Group>
                                                                            <Form.Group className="row">
                                                                                <label htmlFor="exampleInputState" className="col-sm-3 col-form-label">State</label>
                                                                                <div className="col-sm-9">
                                                                                    <Form.Control type="text" className="form-control" id="exampleInputState" value={note.state} placeholder="Password" />
                                                                                </div>
                                                                            </Form.Group>
                                                                            <Form.Group className="row">
                                                                                <label htmlFor="exampleInputPinCode" className="col-sm-3 col-form-label">PinCode</label>
                                                                                <div className="col-sm-9">
                                                                                    <Form.Control type="number" className="form-control" id="exampleInputPinCode" value={note.pincode} placeholder="Password" />
                                                                                </div>
                                                                            </Form.Group>
                                        
                                        
                                                                           
                                                                            <button type="submit" className="btn btn-primary mr-2">Update</button>
                                                                            <button className="btn btn-dark">Reset</button>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                        
                                        
                                                        </div>
                                                    </div>
                                        
                                        
                                        
                                                </div>
                                         
                                                )
                                            })}
                                   
            </div>


        
    )

}









