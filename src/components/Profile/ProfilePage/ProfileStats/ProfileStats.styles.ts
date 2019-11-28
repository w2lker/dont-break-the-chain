import { bon } from '../../../../utils/styleUtils';

const profileStatsStyles = {
  wrapper: {
    ...bon.setFlex('center', 'center'),
    margin: '20px 30px 0',
    padding: '40px 0 30px',
    boxShadow: '0px 4px 8px rgba(176, 190, 197, 0.24)',
  },
  statWrapper: {
    margin: '0 16px',
  },
  statValue: {
    ...bon.setFont(36, '#263238', 300, 'unset'),
    textAlign: 'left',
    margin: 0,
  },
  statSubtitle: {
    fontSize: 14,
  },
  statDescription: {
    ...bon.setFont(14, 'rgba(38, 50, 40, 0.72)', 400, '0.25px'),
    margin: 0,
    lineHeight: '20px',
  },
};

export default profileStatsStyles;
