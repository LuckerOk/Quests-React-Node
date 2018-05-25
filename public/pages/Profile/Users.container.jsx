import { connect } from 'react-redux';
import { resetAlert } from 'Public/shared/Alert/Alert.actions';
import { requestMeFromToken, requestUpdateUsers } from './Users.actions';
import Users from './Users.component';

const mapStateToProps = state => ({
  meFromToken: state.users.meFromToken.currentUser,
  alertStatus: state.alert.message,
  alertVisible: state.alert.visibility,
  alertStyle: state.alert.style
});

const mapDispatchToProps = dispatch => ({
  requestMeFromToken: () => {
    dispatch(requestMeFromToken());
  },
  onChangeClick: (id, creds) => {
    dispatch(requestUpdateUsers(id, creds));
  },
  resetAlert: () => {
    dispatch(resetAlert());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
