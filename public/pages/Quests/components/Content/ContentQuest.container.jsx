import { connect } from 'react-redux';
import ContentQuest from './ContentQuest.component';
import { getCurrentQuest } from '../../Quests.actions';

const mapStateToProps = state => ({
  currentQuest: state.quests.currentQuest
});

const mapDispatchToProps = dispatch => ({
  getCurrentQuest: (id) => {
    dispatch(getCurrentQuest(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentQuest);
