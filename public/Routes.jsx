import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import ActiveQuest from './pages/Quests/components/Quests/Quests.container';
import Login from './pages/Auth/components/Login.container';
import Registration from './pages/Auth/components/Registration.container';
import Users from './pages/Profile/Users.container';
import Rating from './pages/Rating/components/Rating.container';
import Achievements from './pages/Achievements/Achievements';

import { isAuth } from './services/authManager';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute exact path="/profile" component={Users} />
        <PrivateRoute path="/quests" component={ActiveQuest} />
        <Route path="/rating" component={Rating} />
        <Route path="/achievements" component={Achievements} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Registration} />
      </Switch>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => ( // eslint-disable-line no-shadow
  <Route
    {...rest}
    render={props =>
      (isAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/signin',
            from: props.location
          }}
        />
      ))
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object
};
PrivateRoute.defaultProps = {
  location: {}
};

export default Routes;
