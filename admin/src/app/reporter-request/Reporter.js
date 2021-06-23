import React, { Component } from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReporterRequests } from '../../actions/reporterAction';
import { Link } from 'react-router-dom';
import { store } from '../../store';


export const Reporter = (props) => {

  const dispatch = useDispatch()
  const reporter = useSelector((store) => store.reporter)
  const { error, response, loading } = reporter

  useEffect(() => {
    dispatch(getReporterRequests())
  }, [])

  useEffect(() => { }, [error, response, loading])




  return (
    <div>

      <div className="row ">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Reporter Requests</h4>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>

                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
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
                            <td>
                              <div className="badge badge-outline-danger mx-2">Reject</div>
                              <div className="badge badge-outline-success mx-2">Approve</div>
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







