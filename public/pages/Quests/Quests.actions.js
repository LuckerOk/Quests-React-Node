import {
  SHOW_QUESTS, GET_CURRENT_QUEST, UPDATE_QUESTS,
  SET_VISIBILITY_FILTER
} from './Quests.constants';

export function showQuests(request) {
  return {
    type: SHOW_QUESTS,
    request
  };
}

export function getCurrentQuest(id) {
  return {
    type: GET_CURRENT_QUEST,
    id
  };
}

export function updateQuests(id, payload) {
  return {
    type: UPDATE_QUESTS,
    id,
    payload
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
}
