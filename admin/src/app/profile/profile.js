import React, { Component, useState } from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../actions/profileAction';
import { Link } from 'react-router-dom';
import { store } from '../../store';
import PropTypes from "prop-types";
// import '../assets/styles/shards-dashboards.1.1.0.min.css'
// import '../../assets/styles/shards-dashboards.1.1.0.min.css'

import {
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    FormGroup,
    FormInput,
    FormSelect,
    FormTextarea,
    Button
} from "shards-react";

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

            <Card className="mb-4">
                <CardHeader className="border-bottom">
                    <h6 className="m-0">{title}</h6>
                </CardHeader>
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row>
                            <Col>
                                <Form>
                                    <Row form>
                                        {/* First Name */}
                                        <Col md="6" className="form-group">
                                            <label htmlFor="feFirstName">First Name</label>
                                            <FormInput
                                                id="feFirstName"
                                                placeholder="First Name"
                                                value="Sierra"
                                                onChange={() => { }}
                                            />
                                        </Col>
                                        {/* Last Name */}
                                        <Col md="6" className="form-group">
                                            <label htmlFor="feLastName">Last Name</label>
                                            <FormInput
                                                id="feLastName"
                                                placeholder="Last Name"
                                                value="Brooks"
                                                onChange={() => { }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row form>
                                        {/* Email */}
                                        <Col md="6" className="form-group">
                                            <label htmlFor="feEmail">Email</label>
                                            <FormInput
                                                type="email"
                                                id="feEmail"
                                                placeholder="Email Address"
                                                value="sierra@example.com"
                                                onChange={() => { }}
                                                autoComplete="email"
                                            />
                                        </Col>
                                        {/* Password */}
                                        <Col md="6" className="form-group">
                                            <label htmlFor="fePassword">Password</label>
                                            <FormInput
                                                type="password"
                                                id="fePassword"
                                                placeholder="Password"
                                                value="EX@MPL#P@$$w0RD"
                                                onChange={() => { }}
                                                autoComplete="current-password"
                                            />
                                        </Col>
                                    </Row>
                                    <FormGroup>
                                        <label htmlFor="feAddress">Address</label>
                                        <FormInput
                                            id="feAddress"
                                            placeholder="Address"
                                            value="1234 Main St."
                                            onChange={() => { }}
                                        />
                                    </FormGroup>
                                    <Row form>
                                        {/* City */}
                                        <Col md="6" className="form-group">
                                            <label htmlFor="feCity">City</label>
                                            <FormInput
                                                id="feCity"
                                                placeholder="City"
                                                onChange={() => { }}
                                            />
                                        </Col>
                                        {/* State */}
                                        <Col md="4" className="form-group">
                                            <label htmlFor="feInputState">State</label>
                                            <FormSelect id="feInputState">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </FormSelect>
                                        </Col>
                                        {/* Zip Code */}
                                        <Col md="2" className="form-group">
                                            <label htmlFor="feZipCode">Zip</label>
                                            <FormInput
                                                id="feZipCode"
                                                placeholder="Zip"
                                                onChange={() => { }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row form>
                                        {/* Description */}
                                        <Col md="12" className="form-group">
                                            <label htmlFor="feDescription">Description</label>
                                            <FormTextarea id="feDescription" rows="5" />
                                        </Col>
                                    </Row>
                                    <Button theme="accent">Update Account</Button>
                                </Form>
                            </Col>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
            </Card>



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


