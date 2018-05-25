import { combineReducers } from 'redux';
import { SHOW_ACTIVE_CITIES_SUCCESS } from './Cities.constants';

function activeCities(state = [], action) {
  switch (action.type) {
    case SHOW_ACTIVE_CITIES_SUCCESS:
      return action.payload.data;
    default:
      return state;
  }
}

const cityReducer = combineReducers({
  activeCities
});

export default cityReducer;
