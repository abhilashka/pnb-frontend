import React, { useState, useRef } from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReports, toggleNews } from '../../actions/reportAction';
import store from '../../store';
import { ToggleButton } from "./toggler";
import Switch from 'react-neumorphic-toggle';

export const Report = (props) => {

    const dispatch = useDispatch()
    const report = useSelector((store) => store.report)
    const { error, response, loading } = report

    // const [isActive, setIsActive] = useState(0);

    const [isToggleOn, setisToggleOn] = useState(1);
    const [id, setId] = useState(0);

    useEffect(() => {
        dispatch(getReports())


    }, [])


    useEffect(() => {
        dispatch(toggleNews(id, isToggleOn))


    }, [isToggleOn])



    useEffect(() => { }, [error, response, loading])

    const blockUnblockNews = (e) => {
        setId(e.target.id)
        console.log("blockUnblockNews -> e.target.id", e.target.id)
        if (isToggleOn) {
            setisToggleOn(1)

        }
        else {
            setisToggleOn(0)

        }
        console.log("blockUnblockNews -> isToggleOn", isToggleOn)
    }




    // const theme = {
    //     color: '#ff0000',
    //     primaryShadowColor: '#000dd',
    //     secondaryShadowColor: '#ffffff'
    //   }

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
                                                            {/* <div className="badge badge-outline-danger" onClick={blockUnblockNews} id={note.id} >Block</div> */}

                                                            <Switch theme='dark' onClick={blockUnblockNews} id={note.id} />
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







