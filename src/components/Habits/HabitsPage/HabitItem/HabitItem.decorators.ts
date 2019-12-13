import withStyles from '@material-ui/core/styles/withStyles';
import HabitItem from './HabitItem';
import habitItemStyles from './HabitItem.styles';

const styledComponent = withStyles(habitItemStyles)(HabitItem);

export default styledComponent;
