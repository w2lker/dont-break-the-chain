import { styleUtils } from '../../../utils/styleUtils';

const chainHeaderStyles = {
  wrapper: {
    ...styleUtils.minMaxWidth(170),
    ...styleUtils.setFlexContainer('flex-start', 'center'),
    paddingTop: 10,
    paddingBottom: 11,
  },
  icon: {
    fontSize: 20,
  },
  description: {
    marginLeft: 15,
  },
  name: {
    // TODO: define colors as constants
    ...styleUtils.setFont(14, '#263238', 500, '0.1px'),
    margin: '0 0 15px',
    maxWidth: 135,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  stats: {
    ...styleUtils.setFont(12, '#7A8F9B', 500, '0.1px'),
  },
};

export default chainHeaderStyles;
