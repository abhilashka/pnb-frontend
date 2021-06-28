import React  from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getNewsByCategory } from "../../actions/newsAction"
import {
    EmailIcon,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    TwitterShareButton,
    EmailShareButton,
    FacebookShareButton,
    WhatsappShareButton
} from "react-share";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Badge,
} from "shards-react";
import { BASE_URL, BASE_PORT } from '../../constant/base'

export const Report = (props) => {


    const dispatch = useDispatch()
    const news = useSelector((store) => store.news)

    const { error, response, loading } = news

    useEffect(() => {
        dispatch(getNewsByCategory())


    }, [])

    useEffect(() => { }, [error, response, loading])





    return (
        <div>
            <Container fluid className="main-content-container px-4">
                <Row noGutters className="page-header py-4">
                </Row>

                <Row>

                    {response &&

                        response.data &&
                        response.data.length > 0 &&
                        response.data.map((post, idx) => (
                            <Col lg="12" md="6" sm="12" className="mb-4" key={idx}>
                                <Card large className="card-post card-post--1">
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
                                        <h2 className="card-title">

                                            {post.headline}

                                        </h2>
                                        <p className="card-text d-inline-block mb-3" dangerouslySetInnerHTML={{ __html: post.content }} />
                                        <span>
                                            <TwitterShareButton title={post.headline} url={BASE_URL + BASE_PORT}>
                                                <TwitterIcon size={25} round={true} />

                                            </TwitterShareButton>

                                            <EmailShareButton subject={post.headline} imageUrl={post.image} url={BASE_URL + BASE_PORT} body={post.content}>
                                                <EmailIcon size={25} round={true} />

                                            </EmailShareButton>
                                            <FacebookShareButton subject={post.headline} body={post.content} url={BASE_URL + BASE_PORT} separator="share->">
                                                <FacebookIcon size={25} round={true} />

                                            </FacebookShareButton>
                                            <WhatsappShareButton quote={post.headline} url={BASE_URL + BASE_PORT} hashtag={post.headline} >
                                                <WhatsappIcon size={25} round={true} />


                                            </WhatsappShareButton>
                                        </span>
                                    </CardBody>

                                </Card>
                            </Col>
                        ))}
                </Row>




            </Container >

        </div>
    )

}



