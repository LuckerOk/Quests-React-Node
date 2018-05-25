import { combineReducers } from 'redux';
import {
  ME_FROM_TOKEN_FAILURE, ME_FROM_TOKEN_SUCCESS,
  UPDATE_USERS_FAILURE, UPDATE_USERS_SUCCESS
} from './Users.constants';
import { LOGOUT_SUCCESS } from '../Auth/Auth.constants';

function meFromToken(state = {}, action) {
  switch (action.type) {
    case ME_FROM_TOKEN_SUCCESS:
      return { ...state, currentUser: action.currentUser.data };
    case ME_FROM_TOKEN_FAILURE:
      return { ...state, errorMessage: action.message };
    case LOGOUT_SUCCESS:
      return { ...state, currentUser: '' };

    case UPDATE_USERS_SUCCESS:
      return { ...state, currentUser: action.user.data, errorMessage: '' };
    case UPDATE_USERS_FAILURE:
      return { ...state, errorMessage: action.message };

    default:
      return state;
  }
}

const userReducer = combineReducers({
  meFromToken
});

export default userReducer;
