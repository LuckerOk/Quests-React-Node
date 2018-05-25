import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withAlert } from 'react-alert';
import CrossIcon from 'Public/shared/Icons/CrossIcon';
import { StyleAlert } from 'Public/shared/Alert/Alert.constants';

class Registration extends Component {
  UNSAFE_componentWillReceiveProps(nextProps) { // eslint-disable-line camelcase
    if (this.props.alertVisible !== nextProps.alertVisible && nextProps.alertVisible === true) {
      if (nextProps.alertStyle === StyleAlert.FAILURE) {
        this.props.alert.error(nextProps.alertStatus);
        this.props.resetAlert();
      }
    }
  }

  handleClick() {
    const username = this.username;
    const password = this.password;
    const firstName = this.firstName;
    const creds = {
      username: username.value.trim(),
      password: password.value.trim(),
      firstName: firstName.value.trim()
    };

    this.props.onRegistrationClick(creds);
  }

  render() {
    return (
      <div className="ada-modal">
        <div className="ada-modal__dialog">
          <div className="ada-modal__content">
            <div className="ada-form__header">
              <h2 className="ada-title">Регистрация</h2>
              <Link className="ada-menu__header--cross icon-close" to="/">
                <CrossIcon />
              </Link>
            </div>
            <div className="ada-form-control">
              <label className="ada-form-control__label" htmlFor="username">Логин</label>
              <input
                className="ada-form-control__input"
                type="text"
                placeholder="Логин"
                id="username"
                ref={(username) => { this.username = username; }}
              />
            </div>
            <div className="ada-form-control">
              <label className="ada-form-control__label" htmlFor="password">Пароль</label>
              <input
                className="ada-form-control__input"
                type="password"
                placeholder="Пароль"
                id="password"
                ref={(password) => { this.password = password; }}
              />
            </div>
            <div className="ada-form-control">
              <label className="ada-form-control__label" htmlFor="firstName">Имя</label>
              <input
                className="ada-form-control__input"
                type="text"
                placeholder="Имя"
                id="firstName"
                ref={(firstName) => { this.firstName = firstName; }}
              />
            </div>
            <button className="ada-btn ada-btn--fill" onClick={() => this.handleClick()}>
              Регистрация
            </button>
            <div className="ada-form__footer">
              <div>
                <Link className="header--auth" to="/signin">У вас уже есть учётная запись?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Registration.propTypes = {
  onRegistrationClick: PropTypes.func.isRequired,
  alertVisible: PropTypes.bool.isRequired,
  alert: PropTypes.object.isRequired,
  resetAlert: PropTypes.func.isRequired
};

export default withAlert(Registration);
