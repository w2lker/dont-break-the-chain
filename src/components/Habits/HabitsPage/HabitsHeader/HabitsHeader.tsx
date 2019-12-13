import React from 'react';

import { WithStyles } from '@material-ui/styles';

import defaultTexts from '../../../../contants/defaultTexts';
import habitsHeaderStyles from './HabitsHeader.styles';

export interface IHabitsHeaderProps extends WithStyles<typeof habitsHeaderStyles> {}

const HabitsHeader: React.FC<IHabitsHeaderProps> = (props) => {
  const { classes } = props;
  const texts = defaultTexts.habits.header;
  return (
    <div className={classes.root}>
      <h4 className={classes.title}>{texts.title}</h4>
    </div>
  );
};

export default HabitsHeader;
