import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContentQuest extends Component {
  componentDidMount() {
    this.props.getCurrentQuest(this.props.match.params.questId);
  }

  UNSAFE_componentWillUpdate(nextProps) { // eslint-disable-line camelcase
    if (this.props.match.params.questId !== nextProps.match.params.questId) {
      this.props.getCurrentQuest(nextProps.match.params.questId);
    }
  }

  render() {
    const currentQuest = this.props.currentQuest;

    return (
      <div className="quest__content">
        <h1>{currentQuest.title}</h1>
        <div>
          {currentQuest.fullDescription}
        </div>
      </div>
    );
  }
}

ContentQuest.propTypes = {
  getCurrentQuest: PropTypes.func.isRequired,
  currentQuest: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      questId: PropTypes.string
    }).isRequired
  }).isRequired
};

ContentQuest.defaultProps = {
  currentQuest: {}
};

export default ContentQuest;
