import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Wrap extends Component {
  render() {
    return (
      <div className={`ada-wrap ${this.props.openMenu ? 'modal-open content' : ''}`}>
        { this.props.children }
      </div>
    );
  }
}

Wrap.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default Wrap;
