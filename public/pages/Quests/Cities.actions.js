import { SHOW_ACTIVE_CITIES } from './Cities.constants';

export default function showActiveCities(request) {
  return {
    type: SHOW_ACTIVE_CITIES,
    request
  };
}
