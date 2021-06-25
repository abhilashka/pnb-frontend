import React, { Component } from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNews } from '../../actions/newsAction';
import { Link } from 'react-router-dom';
import { store } from '../../store';


export const News = (props) => {

    const dispatch = useDispatch()
    const news = useSelector((store) => store.news)
    const { error, response, loading } = news
    console.log("News -> response", response)

    useEffect(() => {
        dispatch(getNews())
    }, [])

    useEffect(() => { }, [error, response, loading])




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

                                            
                                            <th>Content</th>
                                            <th>Headline</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {response &&

                                            response.data &&
                                            response.data.length > 0 &&
                                            response.data.map((note, index) => {
                                                return (
                                                    <tr key={index}>

                                                        <td>{note.content}</td>
                                                        <td>{note.headline}</td>
                                                       
                                                      
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







