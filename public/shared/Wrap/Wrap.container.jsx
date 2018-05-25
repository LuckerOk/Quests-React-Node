import { connect } from 'react-redux';
import Wrap from './Wrap.component';

const mapStateToProps = state => ({
  openMenu: state.menu
});

export default connect(mapStateToProps, null)(Wrap);
