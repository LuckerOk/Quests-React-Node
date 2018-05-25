import { connect } from 'react-redux';
import { receiveLogout, requestLogout } from 'Public/pages/Auth/Auth.actions';
import Header from './Header.component';
import { openMenu } from '../Menu/Menu.actions';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  showMenu: () => {
    dispatch(openMenu());
  },
  onLogoutClick: () => {
    dispatch(requestLogout());
    localStorage.removeItem('token');
    dispatch(receiveLogout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
