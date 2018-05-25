import React, { Component } from 'react';
import AchievementsList from './AchievementsList.container';
import CitiesListContainer from '../Quests/components/Cities/CitiesList.container';

class Achievements extends Component {
  render() {
    return (
      <div>
        <CitiesListContainer citiesList={props => (
          <AchievementsList {...props} />
        )}
        />
      </div>
    );
  }
}

export default Achievements;
