import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withAlert } from 'react-alert';
import { StyleAlert } from 'Public/shared/Alert/Alert.constants';
import CitiesListContainer from '../Cities/CitiesList.container';
import ContentQuest from '../Content/ContentQuest.container';
import QuestsList from './QuestsList.container';

class ActiveQuest extends Component {
  UNSAFE_componentWillReceiveProps(nextProps) { // eslint-disable-line camelcase
    if (this.props.alertVisible !== nextProps.alertVisible && nextProps.alertVisible === true) {
      if (nextProps.alertStyle === StyleAlert.SUCCESS) {
        this.props.alert.success(nextProps.alertStatus);
        this.props.resetAlert();
      } else {
        this.props.alert.error(nextProps.alertStatus);
        this.props.resetAlert();
      }
    }
  }

  render() {
    return (
      <div className="ada-row">
        <div className="ada-col-md-5">
          <CitiesListContainer citiesList={props => (
            <QuestsList {...props} />
          )}
          />
        </div>
        <div className="ada-col-md-7">
          <Route path={`${this.props.match.url}/:questId`} component={ContentQuest} />
        </div>
      </div>
    );
  }
}

ActiveQuest.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string
  }).isRequired,
  alertVisible: PropTypes.bool.isRequired,
  alert: PropTypes.object.isRequired,
  resetAlert: PropTypes.func.isRequired
};

export default withAlert(ActiveQuest);
