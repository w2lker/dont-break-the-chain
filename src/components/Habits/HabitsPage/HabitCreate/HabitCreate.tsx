import React from 'react';

import { WithStyles } from '@material-ui/styles';

import habitCreateStyles from './HabitCreate.styles';

export interface IHabitCreateProps extends WithStyles<typeof habitCreateStyles> {}

const HabitCreate: React.FC<IHabitCreateProps> = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      HabitCreate Component
    </div>
  );
};

export default HabitCreate;
