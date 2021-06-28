/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState } from "react";
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNews, getAllNews, showDetails } from '../actions/newsAction';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Badge,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";



export const NewsOverview = (props) => {
  const dispatch = useDispatch()
  const news = useSelector((store) => store.news)
  const { error, response, loading } = news
  console.log("News -> response", response)

  const [id, setId] = useState(0)

  useEffect(() => {
    if (sessionStorage['type'] == 'REP') { dispatch(getNews()) } else { dispatch(getAllNews()); }

  }, [])

  useEffect(() => { }, [error, response, loading])

  const onNewsClick = (id) => {
    console.log("onNewsClick -> id", id)

    dispatch(showDetails(id))

  }
  var timestamp = Date.now();
  return (

    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Lastest News" subtitle="Trending" className="text-sm-left" />
      </Row>

      <Row>

        {response &&

          response.data &&
          response.data.length > 0 &&
          response.data.map((post, idx) => (
            <Col lg="4" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${post.image})` }}
                >

                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.image}')` }}
                    >
                      Written by {post.author}
                    </a>
                  </div>
                </div>
                <CardBody>
                  <h5 className="card-title">
                    <Link to={{
                      pathname: '/newsdetails',
                      aboutProps: {
                        newsid: post.id
                      }

                    }} className="text-fiord-blue" onClick={event => { onNewsClick(post.id) }}   >
                      {post.headline}

                    </Link>

                  </h5>
                  
                  <p className="card-text d-inline-block mb-3" dangerouslySetInnerHTML={{ __html: post.content }} style={{
                    "overflow": "hidden",
                    "textOverflow": "ellipsis"
                  }} />
                  <Link to={{
                    pathname: '/newsdetails',
                    aboutProps: {
                      newsid: post.id
                    }

                  }} onClick={event => { onNewsClick(post.id) }} >Read more</Link>



                </CardBody>
              </Card>
            </Col>
          ))}
      </Row>


    </Container >

  )


}


