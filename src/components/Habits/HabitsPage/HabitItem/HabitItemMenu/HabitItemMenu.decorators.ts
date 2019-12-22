import withStyles from '@material-ui/core/styles/withStyles';
import HabitItemMenu from './HabitItemMenu';
import habitItemMenuStyles from './HabitItemMenu.styles';

const styledComponent = withStyles(habitItemMenuStyles)(HabitItemMenu);

export default styledComponent;
