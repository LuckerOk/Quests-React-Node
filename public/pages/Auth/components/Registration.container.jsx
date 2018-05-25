import { connect } from 'react-redux';
import { resetAlert } from 'Public/shared/Alert/Alert.actions';
import Registration from './Registration.component';
import { requestRegistration } from '../Auth.actions';

const mapStateToProps = state => ({
  alertStatus: state.alert.message,
  alertVisible: state.alert.visibility,
  alertStyle: state.alert.style
});

const mapDispatchToProps = dispatch => ({
  onRegistrationClick: (creds) => {
    dispatch(requestRegistration(creds));
  },
  resetAlert: () => {
    dispatch(resetAlert());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
