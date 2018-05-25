import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BurgerIcon from '../Icons/BurgerIcon';

class Header extends Component {
  render() {
    const { showMenu, isAuthenticated, onLogoutClick } = this.props;

    return (
      <div className="ada-header">
        <span
          onClick={() => showMenu()}
          onKeyUp={this.handleKeyUp}
          role="button"
          tabIndex={0}
          className="btn-icon"
        >
          <BurgerIcon iconClass="ada-header__menu" />
        </span>

        {!isAuthenticated &&
          <Link className="ada-header__text" to="/signin">Войти</Link>
        }

        {isAuthenticated &&
          <Link className="ada-header__text" to="/signin" onClick={() => onLogoutClick()}>Выход</Link>
        }

      </div>
    );
  }
}

Header.propTypes = {
  showMenu: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default Header;
