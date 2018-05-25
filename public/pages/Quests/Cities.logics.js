import { createLogic } from 'redux-logic';
import { SHOW_ACTIVE_CITIES, SHOW_ACTIVE_CITIES_FAILURE, SHOW_ACTIVE_CITIES_SUCCESS } from './Cities.constants';

const baseUrl = process.env.API_URL;

const getActiveCities = createLogic({
  type: SHOW_ACTIVE_CITIES,
  latest: true,

  process(_, dispatch, done) {
    fetch(`${baseUrl}/cities`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    })
      .then(res => res.json())
      .then((res) => {
        dispatch({
          type: SHOW_ACTIVE_CITIES_SUCCESS,
          payload: res
        });
        done();
      })
      .catch((res) => {
        dispatch({
          type: SHOW_ACTIVE_CITIES_FAILURE,
          payload: res.error
        });
        done();
      });
  }
});

export default [getActiveCities];
