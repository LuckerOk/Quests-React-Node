import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CrossIcon from 'Public/shared/Icons/CrossIcon';
import CheckMarkIcon from 'Public/shared/Icons/CheckMarkIcon';

class QuestsItem extends Component {
  constructor() {
    super();

    this.handleUpdateActiveQuest = this.handleUpdateActiveQuest.bind(this);
    this.handleCompleteQuest = this.handleCompleteQuest.bind(this);
  }

  handleUpdateActiveQuest() {
    const active = this.props.activeQuest.active;
    this.props.updateQuests(this.props.activeQuest._id, !active);
  }

  handleCompleteQuest() {
    const completed = this.props.activeQuest.complete;
    this.props.updateQuests(this.props.activeQuest._id, !completed);
  }

  render() {
    return (
      <div className="quest-container">
        <div className="quest__title">
          <Link to={`/quests/${this.props.activeQuest._id}`}>{this.props.activeQuest.title}</Link>
        </div>
        <div className="quest-container--options">
          <div className="quest__score">
            {this.props.activeQuest.score}
          </div>
          <div className="quest-container--function">
            <div
              onClick={this.handleCompleteQuest}
              onKeyPress={this.handleCompleteQuest}
              role="button"
              tabIndex="0"
            >
              <CheckMarkIcon iconClass="ada-icon--accept" />
            </div>
            <div
              onClick={this.handleUpdateActiveQuest}
              onKeyPress={this.handleUpdateActiveQuest}
              role="button"
              tabIndex="0"
            >
              <CrossIcon iconClass="ada-icon--reject" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

QuestsItem.propTypes = {
  activeQuest: PropTypes.object.isRequired,
  updateQuests: PropTypes.func.isRequired
};

export default QuestsItem;
