import { connect } from 'react-redux';
import QuestsItem from './QuestsItem.component';
import { updateQuests } from '../../Quests.actions';

const mapDispatchToProps = dispatch => ({
  updateQuests: (id, payload) => {
    dispatch(updateQuests(id, payload));
  }
});

export default connect(null, mapDispatchToProps)(QuestsItem);
