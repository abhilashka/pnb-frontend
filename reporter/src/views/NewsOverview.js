/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNews } from '../actions/newsAction';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";


import { toast } from 'react-toastify';







export const NewsOverview = (props) => {
  const dispatch = useDispatch()
  const news = useSelector((store) => store.news)
  const { error, response, loading } = news
  console.log("News -> response", response)

  useEffect(() => {
    dispatch(getNews())

  }, [])

  useEffect(() => { }, [error, response, loading])

  return (

    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Blog Posts" subtitle="Components" className="text-sm-left" />
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
                    <a href="#" className="text-fiord-blue">
                      {post.headline}
                    </a>
                  </h5>
                  <p className="card-text d-inline-block mb-3" dangerouslySetInnerHTML={{ __html: post.content }} />
                  <span className="text-muted">{post.date}</span>
                </CardBody>
              </Card>
            </Col>
          ))}
      </Row>


    </Container>

  )


}


