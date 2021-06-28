import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Container } from "shards-react";

import NavbarSearch from "../components/layout/MainNavbar/NavbarSearch"
import { Navbar, FormControl, Nav, Form, Button } from 'react-bootstrap';
import BlogPosts from '../views/BlogPosts';
export const Home = ({ layout, stickyTop }) => {
    const classes = classNames(
        "main-navbar",
        "bg-white",
    );

    return (

        <div>

            <Navbar bg="light" variant="light" fixed="top">
                <Navbar.Brand href="">Public News Board</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/"><button className="mb-2 mr-1 btn ">Trending News</button></Nav.Link>
                    <NavbarSearch />
                    <Nav.Link href="login"> <button className="mb-2 mr-1 btn btn-outline-primary btn-sm">Login</button></Nav.Link>
                    <Nav.Link href="register"><button className="mb-2 mr-1 btn btn-outline-primary btn-sm">Register</button></Nav.Link>

                </Nav>

            </Navbar>
            <BlogPosts />

        </div>

    );
};




Home.propTypes = {
    /**
     * The layout type where the MainNavbar is used.
     */
    layout: PropTypes.string,
    /**
     * Whether the main navbar is sticky to the top, or not.
     */
    stickyTop: PropTypes.bool
};

Home.defaultProps = {
    stickyTop: true
};

