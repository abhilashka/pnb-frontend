import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";
import { Login } from "./components/oAuth/Login";



// Route Views
import { NewsOverview } from "./views/NewsOverview";
import { NewsDetails } from "./views/NewsDetails";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";

export default [
  {
    path: "/",
    exact: true,
    layout: Login,
    component: () => <Redirect to="/login" />
  },
  {
    path: "/login",
    layout: Login,
    component: Login
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/news",
    layout: DefaultLayout,
    component: NewsOverview
  },
  {
    path: "/newsdetails",
    layout: DefaultLayout,
    component: NewsDetails
  }
];
