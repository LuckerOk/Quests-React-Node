import { combineReducers } from 'redux';
import {
  GET_CURRENT_QUEST_SUCCESS, SHOW_QUESTS_SUCCESS, UPDATE_QUESTS_SUCCESS,
  SET_VISIBILITY_FILTER, VisibilityFilters
} from './Quests.constants';

const { SHOW_ALL } = VisibilityFilters;

function questsList(state = {}, action) {
  switch (action.type) {
    case SHOW_QUESTS_SUCCESS: {
      const cityQuests = action.payload.data.reduce((acc, quest) => ({
        ...acc,
        [quest._id]: quest
      }), {});

      return { ...state, ...cityQuests };
    }
    case UPDATE_QUESTS_SUCCESS: {
      const questId = action.payload.data._id;
      const stateQuestId = state[questId]._id;

      if (questId === stateQuestId) {
        return { ...state, [questId]: action.payload.data };
      }

      return action.payload.data;
    }
    default:
      return state;
  }
}

function currentQuest(state = {}, action) {
  switch (action.type) {
    case GET_CURRENT_QUEST_SUCCESS: {
      return action.payload.data;
    }
    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER: {
      return action.filter;
    }
    default:
      return state;
  }
}

const questReducer = combineReducers({
  questsList, currentQuest, visibilityFilter
});

export default questReducer;
