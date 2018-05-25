import {
  ME_FROM_TOKEN_REQUEST, ME_FROM_TOKEN_SUCCESS, ME_FROM_TOKEN_FAILURE,
  UPDATE_USERS_REQUEST, UPDATE_USERS_SUCCESS, UPDATE_USERS_FAILURE
} from './Users.constants';

export const requestMeFromToken = () => ({ type: ME_FROM_TOKEN_REQUEST });

export function receiveMeFromToken(currentUser) {
  return {
    type: ME_FROM_TOKEN_SUCCESS,
    currentUser
  };
}

export function meFromTokenError(message) {
  return {
    type: ME_FROM_TOKEN_FAILURE,
    message
  };
}

export function requestUpdateUsers(id, creds) {
  return {
    type: UPDATE_USERS_REQUEST,
    id,
    creds
  };
}

export function receiveUpdateUsers(user) {
  return {
    type: UPDATE_USERS_SUCCESS,
    user
  };
}

export function updateUsersError(message) {
  return {
    type: UPDATE_USERS_FAILURE,
    message
  };
}
