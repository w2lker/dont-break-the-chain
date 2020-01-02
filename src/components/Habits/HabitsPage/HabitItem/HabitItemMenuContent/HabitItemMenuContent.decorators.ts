import withStyles from '@material-ui/core/styles/withStyles';
import HabitItemMenuContent from './HabitItemMenuContent';
import habitItemMenuContentStyles from './HabitItemMenuContent.styles';

const styledComponent = withStyles(habitItemMenuContentStyles)(HabitItemMenuContent);

export default styledComponent;
