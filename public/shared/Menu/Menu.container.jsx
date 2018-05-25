import { connect } from 'react-redux';
import Menu from './Menu.component';

import { closeMenu } from './Menu.actions';

const mapStateToProps = state => ({
  openMenu: state.menu
});

const mapDispatchToProps = dispatch => ({
  hideMenu: () => {
    dispatch(closeMenu());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
