import withStyles from '@material-ui/core/styles/withStyles';
import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { getHabits } from '../../../actions/habits';
import { IHabitsReducer } from '../../../models/habit';
import HabitsPage, { IHabitsPageProps } from './HabitsPage';
import habitsPageStyles from './HabitsPage.styles';

const mapStateToProps = (state: any): IHabitsPageProps => {
  const habits: IHabitsReducer = state.habits;
  return {
    habits: habits.habits,
  } as IHabitsPageProps;
};

const mapDispatchToProps = (dispatch: Dispatch<any>): IHabitsPageProps => {
  return {
    getHabits: () => dispatch(getHabits()),
  } as IHabitsPageProps;
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(HabitsPage);

const styledComponent = withStyles(habitsPageStyles)(connectedComponent);

export default styledComponent;
