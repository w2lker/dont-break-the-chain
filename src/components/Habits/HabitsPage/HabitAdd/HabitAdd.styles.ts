import { Styles } from '@material-ui/styles/withStyles';
import { bon } from '../../../../utils/styleUtils';

const habitAddStyles: Styles<any, any> = {
  root: {
    ...bon.positionMirrored('absolute', 'unset 20px 76px unset'),
  },
  icon: {
    backgroundColor: '#1A80EF',
  },
};

export default habitAddStyles;
