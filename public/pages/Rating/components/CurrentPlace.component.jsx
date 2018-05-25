import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isAuth } from '../../../services/authManager';

class CurrentPlace extends Component {
  componentDidMount() {
    if (isAuth()) {
      this.props.requestCurrentPlace();
    }
  }

  render() {
    return (
      <div className="ada-col-md-6">
        {!isAuth() ? <p className="tips">Войдите, чтобы определить ваше текущее место.</p> :
        <div>
          {!this.props.currentPlace ? <p className="tips">Загрузка текущего места...</p> :
          <div className="rating">
            <div className="rating--row">
              <div className="rating__title--curr">Имя: </div>
              <div className="rating__value--curr">{this.props.currentPlace.firstName}</div>
            </div>
            <div className="rating--row">
              <div className="rating__title--curr">Текущее место: </div>
              <div className="rating__value--curr data--score">{this.props.currentPlace.place}</div>
            </div>
          </div>
          }
        </div>
        }
      </div>
    );
  }
}

CurrentPlace.propTypes = {
  requestCurrentPlace: PropTypes.func.isRequired,
  currentPlace: PropTypes.object
};
CurrentPlace.defaultProps = {
  currentPlace: {}
};

export default CurrentPlace;
