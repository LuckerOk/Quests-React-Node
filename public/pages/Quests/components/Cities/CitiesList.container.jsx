import { connect } from 'react-redux';
import CitiesList from './CitiesList.component';
import showActiveCities from '../../Cities.actions';

const mapStateToProps = state => ({
  citiesActiveList: state.cities.activeCities
});

const mapDispatchToProps = dispatch => ({
  showActiveCities: () => {
    dispatch(showActiveCities());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
