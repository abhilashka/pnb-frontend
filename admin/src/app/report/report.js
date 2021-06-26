import React, { useState, useRef } from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReports, toggleNews } from '../../actions/reportAction';
import Switch from '@material-ui/core/Switch';


export const Report = (props) => {

    const dispatch = useDispatch()
    const report = useSelector((store) => store.report)
    const { error, response, loading } = report

    useEffect(() => {
        dispatch(getReports())


    }, [])


    useEffect(() => { }, [error, response, loading])


    const handleChange = (event) => {
        console.log("handleChange -> event.target.id", event.target.id)
        if (event.target.checked) {
            dispatch(toggleNews(event.target.name, 1))
        }
        else {
            dispatch(toggleNews(event.target.name, 0))
        }
        dispatch(getReports())
    };



    return (
        <div>

            <div className="row ">
                <div className="col-12 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Reports</h4>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>

                                            <th>#</th>
                                            <th>Headline</th>
                                            <th>Reason</th>
                                            <th>Severity</th>
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
                                                        <td>{note.headline}</td>
                                                        <td>{note.report_reason}</td>
                                                        <td>{note.report_ctr}</td>
                                                        {/* {setIsActive(note.isActive)} */}
                                                        <td className="badge ">
                                                            <Switch
                                                                checked={note.isActive}
                                                                onChange={handleChange}
                                                                name={note.id}
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







