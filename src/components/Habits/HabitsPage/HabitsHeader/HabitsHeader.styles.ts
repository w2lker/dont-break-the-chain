import { Styles } from '@material-ui/styles/withStyles';
import { bon } from '../../../../utils/styleUtils';

const habitsHeaderStyles: Styles<any, any> = {
  root: {
    display: 'block',
    textAlign: 'center',
    boxShadow: '0px 4px 8px rgba(176, 190, 197, 0.24)',
    marginBottom: 5,
  },
  title: {
    ...bon.setFont(20, '#263238', 500, 0.15),
    margin: 0,
    padding: '15px 0',
    lineHeight: '28px',
  },
};

export default habitsHeaderStyles;
