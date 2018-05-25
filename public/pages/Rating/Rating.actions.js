import {
  RATING_REQUEST, RATING_SUCCESS, RATING_FAILURE,
  CURRENT_PLACE_REQUEST, CURRENT_PLACE_SUCCESS, CURRENT_PLACE_FAILURE
} from './Rating.constants';

export const requestRating = () => ({ type: RATING_REQUEST });

export function receiveRating(data) {
  return {
    type: RATING_SUCCESS,
    data
  };
}

export function ratingError(message) {
  return {
    type: RATING_FAILURE,
    message
  };
}

export const requestCurrentPlace = () => ({ type: CURRENT_PLACE_REQUEST });

export function receiveCurrentPlace(data) {
  return {
    type: CURRENT_PLACE_SUCCESS,
    data
  };
}

export function currentPlaceError(message) {
  return {
    type: CURRENT_PLACE_FAILURE,
    message
  };
}
