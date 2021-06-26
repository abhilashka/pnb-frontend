import React, { useState } from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReporterRequests, handleReporterRequest } from '../../actions/reporterAction';
import { toast } from 'react-toastify';




export const Reporter = (props) => {

  const dispatch = useDispatch()
  const reporter = useSelector((store) => store.reporter)
  const { error, response, loading } = reporter

  const [resourceType, setResourceType] = useState(0);

  useEffect(() => {
    dispatch(getReporterRequests())
  }, [resourceType])

  useEffect(() => { }, [error, response, loading])



  const handleRequest = (e) => {

    if (e.target.getAttribute("type") == 1) {
      toast.success('Request Accepted', { autoClose: 2000 }, { position: toast.POSITION.BOTTOM_RIGHT })
    }
    else {
      toast.error('Request Rejected', { autoClose: 2000 }, { position: toast.POSITION.BOTTOM_RIGHT })
    }

    dispatch(handleReporterRequest(e.target.id, e.target.getAttribute("type")))
    setResourceType(1)


  }


  return (
    <div>
      {(response) ? <h4>No reporter request</h4> : ""}
      {response && response.data &&
        response.data.length > 0 &&
        <div className="row ">

          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Reporter Requests</h4>
                <div className="table-responsive">

                  <table className="table" >
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




                      {response.data.map((note, index) => {
                        return (
                          <tr key={index} >
                            <td>{index + 1}</td>
                            <td>{note.first_name + " " + note.last_name}</td>
                            <td>{note.email}</td>
                            <td>{note.phone}</td>
                            <td>
                              <div className="badge badge-outline-danger mx-2" onClick={handleRequest} id={note.email} type="0">Reject</div>
                              {/* <button onClick={() => setResourceType("reject")} >reject</button> */}
                              <div className="badge badge-outline-success mx-2" onClick={handleRequest} id={note.email} type="1">Approve</div>
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
      }

    </div >
  )

}







