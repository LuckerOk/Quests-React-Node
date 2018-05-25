import React, { Component } from 'react';
import PropTypes from 'prop-types';
import camera from '../../assets/camera.png';
import map from '../../assets/map.png';

class AchievementsList extends Component {
  componentWillMount() {
    this.props.showQuests();
  }

  render() {
    return (
      <table className="ada-table">
        <tbody className={this.props.className}>
          {this.props.quests && this.props.quests.map(quest => (
            <tr key={quest._id} className={`ada-table__cell--content ${quest.complete ? 'complete' : ''}`}>
              <th className="ada-table__cell ada-table__cell--width200">
                <img className="ada-table__cell--image" src={`${quest.type === 'img' ? camera : map}`} alt="" />
              </th>
              <td className="ada-table__cell ada-table__cell--width900">
                <h1 className="ada-table__cell--text">{quest.title}</h1>
                <div className="ada-table__cell--text">{quest.shortDescription}</div>
                <div className="ada-table__cell--text">{quest.score}</div>
              </td>
            </tr>))}
        </tbody>
      </table>
    );
  }
}

AchievementsList.propTypes = {
  className: PropTypes.string.isRequired,
  showQuests: PropTypes.func.isRequired,
  quests: PropTypes.array
};

AchievementsList.defaultProps = {
  quests: []
};

export default AchievementsList;
