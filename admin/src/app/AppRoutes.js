import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Spinner from '../app/shared/Spinner';
import { Report } from './report/report'
import { Reporter } from './reporter-request/Reporter'
import { User } from './user/user'
import { Profile } from './profile/profile'
import { Login } from './user-pages/Login';
import  {News}  from './news/news';


const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const ChartJs = lazy(() => import('./charts/ChartJs'));
const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));



class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/charts/chart-js" component={ChartJs} />
          <Route path="/error-pages/error-404" component={Error404} />
          <Route path="/error-pages/error-500" component={Error500} />
          <Route path="/reporter-request" component={Reporter} />
          <Route path="/users" component={User} />
          <Route path="/report" component={Report} />
          <Route path="/news" component={News} />
          <Route path="/profile" component={Profile} />
          <Route path="/" component={Login} />

          {/* <Redirect to="/" /> */}
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;