import { connect } from 'react-redux';
import { resetAlert } from 'Public/shared/Alert/Alert.actions';
import ActiveQuest from './Quests.component';

const mapStateToProps = state => ({
  alertStatus: state.alert.message,
  alertVisible: state.alert.visibility,
  alertStyle: state.alert.style
});

const mapDispatchToProps = dispatch => ({
  resetAlert: () => {
    dispatch(resetAlert());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveQuest);
