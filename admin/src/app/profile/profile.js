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

    const title = "k"
    const [formData, setFormData] = useState()

    const handleOnChange = (e) => {
        setFormData(e.target.value);
    }
    // setFormData(response.first_name);




    return (
        <div>

            <div>
                <div className="page-header">

                </div>
                <div className="row">
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Default form</h4>
                                <p className="card-description"> Basic form layout </p>
                                <form className="forms-sample">
                                    <Form.Group>
                                        <label htmlFor="exampleInputUsername1">Username</label>
                                        <Form.Control type="text" id="exampleInputUsername1" placeholder="Username" />
                                    </Form.Group>
                                    <Form.Group>
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <Form.Control type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group>
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <Form.Control type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group>
                                        <label htmlFor="exampleInputConfirmPassword1">Confirm Password</label>
                                        <Form.Control type="password" className="form-control" id="exampleInputConfirmPassword1" placeholder="Password" />
                                    </Form.Group>
                                    <div className="form-check">

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Update Profile</h4>
                                <form className="forms-sample">
                                    <div className="row">

                                        <Form.Group >
                                            <label htmlFor="exampleInputUsername2" >Firstname</label>
                                            <Form.Control type="text" className="form-control col-sm-6" id="exampleInputUsername2" placeholder="Firstname" />
                                        </Form.Group>
                                        <Form.Group >
                                            <label htmlFor="exampleInputEmail2" >Lastname</label>

                                            <Form.Control type="email" className="form-control col-sm-6" id="exampleInputEmail2" placeholder="Lastname" />
                                        </Form.Group>

                                    </div>
                                    <Form.Group className="row">
                                        <label htmlFor="exampleInputMobile" className="col-sm-3 col-form-label">Mobile</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="text" className="form-control" id="exampleInputMobile" placeholder="Mobile number" />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="row">
                                        <label htmlFor="exampleInputPassword2" className="col-sm-3 col-form-label">Password</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="row">
                                        <label htmlFor="exampleInputConfirmPassword2" className="col-sm-3 col-form-label">Re Password</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="password" className="form-control" id="exampleInputConfirmPassword2" placeholder="Password" />
                                        </div>
                                    </Form.Group>
                                    <div className="form-check">
                                        <label className="form-check-label text-muted">
                                            <input type="checkbox" className="form-check-input" />
                                            <i className="input-helper"></i>
                      Remember me
                    </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary mr-2">Submit</button>
                                    <button className="btn btn-dark">Reset</button>
                                </form>
                            </div>
                        </div>
                    </div>


                </div>
            </div>



        </div>
    )


    Profile.propTypes = {
        /**
         * The user details object.
         */
        profile: PropTypes.object
    };


    Profile.defaultProps = {
        profile: {
            name: "Sierra Brooks",

            jobTitle: "Project Manager",
            performanceReportTitle: "Workload",
            performanceReportValue: 74,
            metaTitle: "Description",
            metaValue:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
        }

    }


}


