import { connect } from 'react-redux';
import AchievementsList from './AchievementsList.component';
import { setVisibilityFilter, showQuests } from '../Quests/Quests.actions';
import { getVisibleQuests, getCityQuests } from '../Quests/Quests.selectors';
import { VisibilityFilters } from '../Quests/Quests.constants';

const mapStateToProps = (state, props) => ({
  quests: getVisibleQuests(
    getCityQuests(props.cityQuests, state.quests.questsList),
    state.quests.visibilityFilter
  )
});

const mapDispatchToProps = dispatch => ({
  showQuests: () => {
    dispatch(showQuests());
    dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AchievementsList);
