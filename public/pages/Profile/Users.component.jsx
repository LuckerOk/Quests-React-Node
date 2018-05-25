import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withAlert } from 'react-alert';
import { StyleAlert } from 'Public/shared/Alert/Alert.constants';

class Users extends Component {
  constructor() {
    super();

    this.state = {
      pass: false,
      firstName: false
    };

    this.toggleChangePass = this.toggleChangePass.bind(this);
    this.toggleChangeName = this.toggleChangeName.bind(this);
    this.handleClickPass = this.handleClickPass.bind(this);
    this.handleClickName = this.handleClickName.bind(this);
  }

  componentWillMount() {
    this.props.requestMeFromToken();
  }

  UNSAFE_componentWillReceiveProps(nextProps) { // eslint-disable-line camelcase
    if (this.props.alertVisible !== nextProps.alertVisible && nextProps.alertVisible === true) {
      if (nextProps.alertStyle === StyleAlert.SUCCESS) {
        this.props.alert.success(nextProps.alertStatus);
        this.props.resetAlert();
      } else {
        this.props.alert.error(nextProps.alertStatus);
        this.props.resetAlert();
      }
    }
  }

  toggleChangePass() {
    this.setState(prevState => ({
      pass: !prevState.pass
    }));
  }

  toggleChangeName() {
    this.setState(prevState => ({
      firstName: !prevState.firstName
    }));
  }

  handleClickPass() {
    const password = this.password;
    const creds = { password: password.value.trim() };

    this.props.onChangeClick(this.props.meFromToken.id, creds);
  }

  handleClickName() {
    const firstName = this.firstName;
    const creds = { firstName: firstName.value.trim() };

    this.props.onChangeClick(this.props.meFromToken.id, creds);
  }

  render() {
    return (
      <div className="profile">
        <div>
          <h4 className="profile__title">Имя: {this.props.meFromToken.firstName}</h4>
        </div>
        <div>
          <h4 className="profile__title">Логин: {this.props.meFromToken.username}</h4>
        </div>
        <div
          className="profile--edit"
          onClick={this.toggleChangeName}
          onKeyPress={this.toggleChangeName}
          role="button"
          tabIndex="0"
        >
          Изменить имя
        </div>
        <div className={`${this.state.firstName ? 'open' : 'hide'}`}>
          <input
            className="ada-form-control__input profile-form-control__input"
            type="text"
            placeholder="Введите имя"
            ref={(firstName) => { this.firstName = firstName; }}
          />
          <button className="profile__btn--edit" onClick={this.handleClickName}>Изменить</button>
        </div>
        <div
          onClick={this.toggleChangePass}
          onKeyPress={this.toggleChangePass}
          role="button"
          tabIndex="0"
          className="profile--edit"
        >
          Изменить пароль
        </div>
        <div className={`${this.state.pass ? 'open' : 'hide'}`}>
          <input
            className="ada-form-control__input profile-form-control__input"
            type="password"
            placeholder="Введите пароль"
            ref={(password) => { this.password = password; }}
          />
          <button className="profile__btn--edit" onClick={this.handleClickPass}>Изменить</button>
        </div>
      </div>
    );
  }
}

Users.propTypes = {
  requestMeFromToken: PropTypes.func.isRequired,
  meFromToken: PropTypes.object,
  firstName: PropTypes.string,
  username: PropTypes.string,
  onChangeClick: PropTypes.func.isRequired,
  alertVisible: PropTypes.bool.isRequired,
  alert: PropTypes.object.isRequired,
  resetAlert: PropTypes.func.isRequired
};
Users.defaultProps = {
  meFromToken: {},
  firstName: '',
  username: ''
};

export default withAlert(Users);
