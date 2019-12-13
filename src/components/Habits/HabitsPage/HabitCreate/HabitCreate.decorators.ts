import withStyles from '@material-ui/core/styles/withStyles';
import HabitCreate from './HabitCreate';
import habitCreateStyles from './HabitCreate.styles';

const styledComponent = withStyles(habitCreateStyles)(HabitCreate);

export default styledComponent;
