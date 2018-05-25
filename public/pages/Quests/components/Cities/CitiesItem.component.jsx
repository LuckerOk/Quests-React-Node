import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OpenIcon from 'Public/shared/Icons/OpenIcon';

class CitiesItem extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };

    this.toggleActiveCities = this.toggleActiveCities.bind(this);
  }

  toggleActiveCities() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    return (
      <div className="ada-panel__item">
        <div
          className="ada-panel__header"
          onClick={this.toggleActiveCities}
          onKeyPress={this.toggleActiveCities}
          role="button"
          tabIndex="0"
        >
          <div className="ada-panel__text">
            {this.props.activeCity.title}
          </div>
          <OpenIcon iconClass={`ada-panel__icon ${this.state.isOpen ? 'ada-panel__icon--active' : ''}`} />
        </div>
        {this.props.citiesList({
          cityQuests: this.props.activeCity.quests,
          className: `ada-panel__content ${this.state.isOpen ? 'open' : ''}`
        })}
      </div>
    );
  }
}

CitiesItem.propTypes = {
  activeCity: PropTypes.object.isRequired,
  citiesList: PropTypes.func.isRequired
};

export default CitiesItem;
