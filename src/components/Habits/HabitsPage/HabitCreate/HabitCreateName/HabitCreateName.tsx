import React from 'react';

import { WithStyles } from '@material-ui/styles';

import habitCreateNameStyles from './HabitCreateName.styles';

export interface IHabitCreateNameProps extends WithStyles<typeof habitCreateNameStyles> {}

const HabitCreateName: React.FC<IHabitCreateNameProps> = (props) => {
  const { classes } = props;
  return (
    <div className={ classes.root }>
      HabitCreateName Component
    </div>
  );
};

export default HabitCreateName;
