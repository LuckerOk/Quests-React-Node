import { SET_VISIBILITY_ALERT, RESET_ALERT } from './Alert.constants';

export function setVisibilityAlert(style, message) {
  return {
    type: SET_VISIBILITY_ALERT,
    visibility: true,
    style,
    message
  };
}

export function resetAlert() {
  return {
    type: RESET_ALERT,
    visibility: false,
    style: null,
    message: ''
  };
}
