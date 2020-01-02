import { Styles } from '@material-ui/styles';
import { bon } from '../../../../../utils/styleUtils';

const habitItemMenuContentStyles: Styles<any, any> = {
  root: {
    ...bon.setFlex('space-between', 'center'),
  },
  icon: {
    ...bon.size(40),
    textAlign: 'center',
  },
  text: {
    paddingLeft: 15,
    width: 165,
  },
};

export default habitItemMenuContentStyles;
