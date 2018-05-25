import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BurgerIcon extends Component {
  render() {
    return (
      <div className={`ada-icon ${this.props.iconClass}`} >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h40v40H0z" />
            <path
              fill="#000"
              fillRule="nonzero"
              d="M5 30h30v-3.333H5V30zm0-8.333h30v-3.334H5v3.334zM5 10v3.333h30V10H5z"
            />
          </g>
        </svg>
      </div>
    );
  }
}

BurgerIcon.propTypes = {
  iconClass: PropTypes.string
};
BurgerIcon.defaultProps = {
  iconClass: ''
};
