// tslint:disable:no-console

import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import HabitItemMenu, { IHabitItemMenuProps } from './HabitItemMenu';
import habitItemMenuStyles from './HabitItemMenu.styles';

const mapStateToProps = (state: any): IHabitItemMenuProps => {
  return {} as IHabitItemMenuProps;
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>): IHabitItemMenuProps => {
  return {
    onCheck: () => console.log('-----', 'TODO: Add check function'),
    onUncheck: () => console.log('-----', 'TODO: Add uncheck function'),
    onPause: () => console.log('-----', 'TODO: Add pause function'),
    onDelete: () => console.log('-----', 'TODO: Add delete function'),
  } as IHabitItemMenuProps;
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(HabitItemMenu);

const styledComponent = withStyles(habitItemMenuStyles)(connectedComponent);

// tslint:enable:no-console
export default styledComponent;
