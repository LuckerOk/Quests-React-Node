import { RESET_ALERT, SET_VISIBILITY_ALERT } from './Alert.constants';

const initialState = { visibility: false, style: null, message: '' };

export default function alert(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_ALERT: {
      return { visibility: action.visibility, style: action.style, message: action.message };
    }
    case RESET_ALERT: {
      return { visibility: action.visibility, style: action.style, message: action.message };
    }
    default:
      return state;
  }
}
