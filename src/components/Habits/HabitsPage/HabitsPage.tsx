import React from 'react';

import { WithStyles } from '@material-ui/styles';

import HabitsHeader from './HabitsHeader';

import habitsPageStyles from './HabitsPage.styles';

export interface IHabitsPageProps extends WithStyles<typeof habitsPageStyles> {}

const HabitsPage: React.FC<IHabitsPageProps> = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <HabitsHeader />
    </div>
  );
};

export default HabitsPage;
