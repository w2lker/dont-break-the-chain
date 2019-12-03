import { Styles } from '@material-ui/styles/withStyles';
import { bon } from '../../../../utils/styleUtils';

const profileHeaderStyles: Styles<{}, {}, any> = {
  root: {
    position: 'relative',
    marginBottom: 5,
    textAlign: 'center',
    boxShadow: '0px 4px 8px rgba(176, 190, 197, 0.24)',
  },
  title: {
    ...bon.setFont(20, '#263238', 500, '0.15px'),
    margin: 0,
    padding: '15px 0',
    lineHeight: '28px',
  },
  button: {
    ...bon.positionMirrored('absolute', '4px 0 unset unset'),
    ...bon.size(52),
  },
};

export default profileHeaderStyles;
