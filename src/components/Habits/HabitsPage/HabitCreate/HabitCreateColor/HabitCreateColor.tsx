import React from 'react';

import { WithStyles } from '@material-ui/styles';

import habitCreateColorStyles from './HabitCreateColor.styles';

export interface IHabitCreateColorProps extends WithStyles<typeof habitCreateColorStyles> {}

const HabitCreateColor: React.FC<IHabitCreateColorProps> = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      HabitCreateColor Component
    </div>
  );
};

export default HabitCreateColor;
