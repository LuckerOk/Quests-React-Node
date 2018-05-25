import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestsItem from './QuestsItem.container';

class QuestsList extends Component {
  componentWillMount() {
    this.props.showQuests();
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.props.activeQuests.map(quest => (
          <QuestsItem
            key={quest._id}
            activeQuest={quest}
          />
        ))}
      </div>
    );
  }
}

QuestsList.propTypes = {
  className: PropTypes.string.isRequired,
  showQuests: PropTypes.func.isRequired,
  activeQuests: PropTypes.array
};

QuestsList.defaultProps = {
  activeQuests: []
};

export default QuestsList;
