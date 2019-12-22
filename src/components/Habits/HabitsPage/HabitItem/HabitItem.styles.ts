import { createUseStyles } from 'react-jss';

import { bon } from '../../../../utils/styleUtils';

import { colors } from '../../../../contants/colors';
import { IHabitItemProps } from './HabitItem';

// @ts-ignore
const habitItemStyles = createUseStyles({
  wrapper: {
    ...bon.setFlex('flex-start', 'center'),
    position: 'relative',
    padding: '20px 15px',
    '&:after': {
      content: '""',
      display: 'block',
      ...bon.positionMirrored('absolute', 'unset 0 0 100px'),
      height: 1,
      backgroundColor: '#E1E8EC',
    },
  },
  lastWrapper: {
    '&:after': {
      content: 'none',
    },
  },
  icon: {
    position: 'relative',
    padding: 23,
    borderRadius: 2,
    color: '#FFF',
    backgroundColor: (props: IHabitItemProps) => colors[props.content.color as string][500],
  },
  checkMark: {
    ...bon.positionMirrored('absolute', 'unset 0 0 unset'),
    color: bon.rgba('#FFFFFF', 0.3),
  },
  description: {
    marginLeft: 15,
  },
  title: {
    ...bon.setFont(16, '#263238', 400, '0.44px'),
    lineHeight: '24px',
    margin: '0 0 5px',
  },
  subtitle: {
    display: 'block',
    ...bon.setFont(14,  '#263238', 400, '0.25px'),
    lineHeight: '20px',
  },
});

export default habitItemStyles;
