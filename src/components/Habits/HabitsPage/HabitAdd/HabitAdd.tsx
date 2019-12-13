import React from 'react';
import { Link } from 'react-router-dom';

import Fab from '@material-ui/core/Fab';
import { WithStyles } from '@material-ui/styles';
import { routing } from '../../../../contants/routing';
import MaterialDesignIcon from '../../../basic/Material-Icon';

import habitAddStyles from './HabitAdd.styles';

export interface IHabitAddProps extends WithStyles<typeof habitAddStyles> {}

const HabitAdd: React.FC<IHabitAddProps> = (props) => {
  const { classes } = props;
  const createUrl = routing.habits.root + routing.habits.create;
  return (
    <div className={classes.root}>
      <Fab
        classes={{
          root: classes.icon,
        }}
        color="primary"
        component={Link}
        to={createUrl}
      >
        <MaterialDesignIcon name="plus" />
      </Fab>
    </div>
  );
};

export default HabitAdd;
