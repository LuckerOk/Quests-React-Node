import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CurrentPlace from './CurrentPlace.container';

class Rating extends Component {
  componentDidMount() {
    this.props.requestRating();
  }

  render() {
    return (
      <div className="ada-row">
        <CurrentPlace />
        <div className="ada-col-md-6">
          {!this.props.rating ? <p className="tips">Загрузка рейтинга...</p> :
          <div className="table">
            <div className="table__header">
              <div className="table__item">Место</div>
              <div className="table__item">Логин</div>
              <div className="table__item">Имя</div>
              <div className="table__item">Очки</div>
            </div>
            <div className="table__body">
              {this.props.rating.map(user => (
                <div className="table__body--row" key={user.id}>
                  <div className="table__data">{user.place}</div>
                  <div className="table__data">{user.username}</div>
                  <div className="table__data">{user.firstName}</div>
                  <div className="table__data data--score">{user.score}</div>
                </div>
              ))}
            </div>
          </div>
          }
        </div>
      </div>
    );
  }
}

Rating.propTypes = {
  requestRating: PropTypes.func.isRequired,
  rating: PropTypes.array
};
Rating.defaultProps = {
  rating: []
};

export default Rating;
