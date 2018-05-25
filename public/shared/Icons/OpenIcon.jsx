import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class OpenIcon extends Component {
  render() {
    return (
      <div className={`ada-icon ${this.props.iconClass}`} >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
          <g fill="none" fillRule="evenodd">
            <path
              fill="#000"
              fillRule="nonzero"
              d="M12.35 15L20 22.211 27.65 15 30 17.22l-10 9.447-10-9.447z"
            />
            <path d="M0 0h40v40H0z" />
          </g>
        </svg>
      </div>
    );
  }
}

OpenIcon.propTypes = {
  iconClass: PropTypes.string
};
OpenIcon.defaultProps = {
  iconClass: ''
};
