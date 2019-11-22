import { bon } from '../../../utils/styleUtils';

const navigationMenuItemStyles = {
  root: {
    color: '#979797',
    '&.Mui-selected': {
      color: '#1A80EF',
    },
  },
  label: {
    ...bon.setFont(12, 'inherit', 400, '0.4px'),
    lineHeight: '16px',
    paddingTop: 10,
  },
  icon: {
    ...bon.setFont(19, 'inherit', 'unset', 'unset'),
  },
};

export default navigationMenuItemStyles;
