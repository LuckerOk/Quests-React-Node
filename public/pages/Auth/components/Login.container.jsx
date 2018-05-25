import { connect } from 'react-redux';
import { resetAlert } from 'Public/shared/Alert/Alert.actions';
import Login from './Login.component';
import { requestLogin } from '../Auth.actions';

const mapStateToProps = state => ({
  alertStatus: state.alert.message,
  alertVisible: state.alert.visibility,
  alertStyle: state.alert.style
});

const mapDispatchToProps = dispatch => ({
  onLoginClick: (creds) => {
    dispatch(requestLogin(creds));
  },
  resetAlert: () => {
    dispatch(resetAlert());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
