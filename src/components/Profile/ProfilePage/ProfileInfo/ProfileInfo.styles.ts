import { bon } from '../../../../utils/styleUtils';

const profileInfoStyles = {
  wrapper: {
    margin: '30px 30px 0',
    padding: '16px',
    boxShadow: '0px 4px 8px rgba(176, 190, 197, 0.24)',
  },
  avatar: {
    ...bon.size(48),
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    borderRadius: '50%',
  },
  name: {
    ...bon.setFont(20, '#263228', 500, '0.15px'),
    margin: '12px 0 0',
    lineHeight: '24px',
  },
  email: {
    ...bon.setFont(14, 'rgba(38, 50, 56, 0.72)', 500, '0.15px'),
    lineHeight: '20px',
    margin: 0,
  },
};

export default profileInfoStyles;
