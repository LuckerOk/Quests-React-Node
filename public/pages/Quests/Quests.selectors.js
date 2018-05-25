export const getVisibleQuests = (quests, filter) => { // eslint-disable-line consistent-return
  if (quests !== null) {
    switch (filter) {
      case 'SHOW_ALL':
        return quests;
      case 'SHOW_ACTIVE': {
        return (quests || []).filter(q => q.active && !q.complete);
      }
      case 'SHOW_COMPLETED':
        return (quests || []).filter(q => q.complete);
      default:
        return filter;
    }
  }
};

export const getMapQuests = (quests) => { // eslint-disable-line consistent-return
  if (Object.keys(quests).length !== 0) {
    return Object.values(quests);
  }
};

export const getCityQuests = (cityQuests, quests) => {
  if (Object.keys(quests).length !== 0) {
    return cityQuests.map(questId => quests[questId]);
  }
  return null;
};
