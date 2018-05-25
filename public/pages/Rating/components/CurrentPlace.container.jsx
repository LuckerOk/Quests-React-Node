import { connect } from 'react-redux';
import { requestCurrentPlace } from '../Rating.actions';
import CurrentPlace from './CurrentPlace.component';

const mapStateToProps = state => ({
  currentPlace: state.rating.currentPlace.data
});

const mapDispatchToProps = dispatch => ({
  requestCurrentPlace: () => {
    dispatch(requestCurrentPlace());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentPlace);
