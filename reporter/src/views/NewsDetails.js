
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon,
    TwitterShareButton
} from "react-share";
import { showDetails } from '../actions/newsAction';

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
import { BASE_URL, BASE_PORT } from '../constant/base'

export const NewsDetails = (props) => {
    const dispatch = useDispatch()
    const news = useSelector((store) => store.news)

    const { error, response, loading } = news
    const [id, setId] = useState()

    useEffect(() => {


    }, [])

    useEffect(() => { }, [error, response, loading])


    return (
        <div>
            <Container fluid className="main-content-container px-4">
                <Row noGutters className="page-header py-4">
                    {/* <div sm="4" title="Lastest News" subtitle="Trending" className="text-sm-left" >hello</div> */}
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
                                        <span className="text-muted">{post.date}</span>
                                        <span>
                                            <h6>Share News </h6>
                                            <TwitterShareButton title={post.headline} url={BASE_URL+BASE_PORT}>
                                                <TwitterIcon size={32} round={true} />

                                            </TwitterShareButton>
                                            <EmailIcon size={32} round={true} />
                                            <FacebookIcon size={32} round={true} />
                                            <WhatsappIcon size={32} round={true} />
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