import quests from '../pages/Quests/Quests.logics';
import cities from '../pages/Quests/Cities.logics';
import auth from '../pages/Auth/Auth.logics';
import users from '../pages/Profile/Users.logics';
import rating from '../pages/Rating/Rating.logics';

const logics = [
  ...cities,
  ...quests,
  ...auth,
  ...users,
  ...rating
];

export default logics;
