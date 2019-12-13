import React from 'react';

import { WithStyles } from '@material-ui/styles';

import habitItemStyles from './HabitItem.styles';

export interface IHabitItemProps extends WithStyles<typeof habitItemStyles> {}

const HabitItem: React.FC<IHabitItemProps> = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      HabitItem Component
    </div>
  );
};

export default HabitItem;
