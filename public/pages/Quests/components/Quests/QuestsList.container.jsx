import { connect } from 'react-redux';
import QuestsList from './QuestsList.component';
import { setVisibilityFilter, showQuests } from '../../Quests.actions';
import { getVisibleQuests, getCityQuests } from '../../Quests.selectors';
import { VisibilityFilters } from '../../Quests.constants';

const mapStateToProps = (state, props) => ({
  activeQuests: getVisibleQuests(
    getCityQuests(props.cityQuests, state.quests.questsList),
    state.quests.visibilityFilter
  )
});

const mapDispatchToProps = dispatch => ({
  showQuests: () => {
    dispatch(showQuests());
    dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestsList);
