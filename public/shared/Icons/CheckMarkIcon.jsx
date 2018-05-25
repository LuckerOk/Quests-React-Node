import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CheckMarkIcon extends Component {
  render() {
    return (
      <div className={`ada-icon ${this.props.iconClass}`} >
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
          <title>checkmark</title>
          <path d="M27 4l-15 15-7-7-5 5 12 12 20-20z" />
        </svg>
      </div>
    );
  }
}

CheckMarkIcon.propTypes = {
  iconClass: PropTypes.string
};
CheckMarkIcon.defaultProps = {
  iconClass: ''
};
