import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import questReducer from '../pages/Quests/Quests.reducer';
import cityReducer from '../pages/Quests/Cities.reducer';
import MenuReducer from '../shared/Menu/Menu.reducer';
import authReducer from '../pages/Auth/Auth.reducer';
import userReducer from '../pages/Profile/Users.reducer';
import ratingReducer from '../pages/Rating/Rating.reducer';
import alertReducer from '../shared/Alert/Alert.reducer';

const rootReducer = combineReducers({
  cities: cityReducer,
  quests: questReducer,
  users: userReducer,
  menu: MenuReducer,
  auth: authReducer,
  rating: ratingReducer,
  alert: alertReducer,
  router: routerReducer
});

export default rootReducer;
