import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import ClientRegPage2 from '../ClientRegPage2/ClientRegPage2';
import ClientRegPage1 from '../ClientRegPage1/ClientRegPage1';
import VTPage1 from '../VTPage1/VTPage1';
import VTPage2 from '../VTPage2/VTPage2';
import VTPage3 from '../VTPage3/VTPage3';
import LandingPage from '../LandingPage/LandingPage'
import VTDashboard from '../VTDashboard/VTDashboard'
import VTReviewPage from '../VTReviewPage/VTReviewPage'
import ClientReviewPage from '../ClientReviewPage/ClientReviewPage'

import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
              <Route
              exact
              path="/creg2"
              component={ClientRegPage2}
            />
              <Route
              exact
              path="/creg1"
              component={ClientRegPage1}
            />
              <Route
              exact
              path="/vtreg1"
              component={VTPage1}
            />
              <Route
              exact
              path="/vtreg2"
              component={VTPage2}
            />
            <Route
              exact
              path="/vtreg3"
              component={VTPage3}
            />
            <Route
              exact
              path="/landingPg"
              component={LandingPage}
            />
            <Route
              exact
              path="/vtdashboard"
              component={VTDashboard}
            />
            <Route
              exact
              path="/vtreview"
              component={VTReviewPage}
            />
            <Route
              exact
              path="/clientreview"
              component={ClientReviewPage}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
