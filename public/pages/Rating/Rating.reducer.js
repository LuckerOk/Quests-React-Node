import { combineReducers } from 'redux';
import { RATING_SUCCESS, RATING_FAILURE, CURRENT_PLACE_SUCCESS, CURRENT_PLACE_FAILURE } from './Rating.constants';

function rating(state = {}, action) {
  switch (action.type) {
    case RATING_SUCCESS:
      return action.data;
    case RATING_FAILURE:
      return { ...state, errorMessage: action.message };
    default:
      return state;
  }
}

function currentPlace(state = {}, action) {
  switch (action.type) {
    case CURRENT_PLACE_SUCCESS:
      return action.data;
    case CURRENT_PLACE_FAILURE:
      return { ...state, errorMessage: action.message };
    default:
      return state;
  }
}

const ratingReducer = combineReducers({
  rating, currentPlace
});

export default ratingReducer;
