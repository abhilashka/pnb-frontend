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
       <div className="row">
             {response &&

              response.data &&
              response.data.length > 0 &&
              response.data.map((note, index) => {
    return (
                
              <div key={index}>
                  <div className="news">
                  <div  className="card md-col-2">
                  <img src="" className="card-img-top" alt="..."/>
                  <div className="card-body">
                  <h5 className="card-title">{note.headline}</h5>
                  <p className="card-text">{note.content}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                 </div>
               </div>
              </div>
          )
       })}
       </div>
        
    )

}







