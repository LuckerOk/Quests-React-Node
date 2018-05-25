import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CrossIcon extends Component {
  render() {
    return (
      <div className={`ada-icon ${this.props.iconClass}`} >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
          <g fill="none" fillRule="evenodd">
            <path
              fill="#000"
              fillRule="nonzero"
              d="M31.667 10.683l-2.35-2.35L20
              17.65l-9.317-9.317-2.35 2.35L17.65 20l-9.317
              9.317 2.35 2.35L20 22.35l9.317 9.317 2.35-2.35L22.35 20z"
            />
            <path d="M0 0h40v40H0z" />
          </g>
        </svg>
      </div>
    );
  }
}

CrossIcon.propTypes = {
  iconClass: PropTypes.string
};
CrossIcon.defaultProps = {
  iconClass: ''
};
