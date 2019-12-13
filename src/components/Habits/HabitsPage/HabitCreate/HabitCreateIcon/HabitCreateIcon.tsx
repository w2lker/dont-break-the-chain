import React from 'react';

import { WithStyles } from '@material-ui/styles';

import habitCreateIconStyles from './HabitCreateIcon.styles';

export interface IHabitCreateIconProps extends WithStyles<typeof habitCreateIconStyles> {}

const HabitCreateIcon: React.FC<IHabitCreateIconProps> = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      HabitCreateIcon Component
    </div>
  );
};

export default HabitCreateIcon;
