import { connect } from 'react-redux';
import { requestRating } from '../Rating.actions';
import Rating from './Rating.component';

const mapStateToProps = state => ({
  rating: state.rating.rating.data
});

const mapDispatchToProps = dispatch => ({
  requestRating: () => {
    dispatch(requestRating());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Rating);
