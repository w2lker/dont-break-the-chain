import React, { useEffect } from 'react';

import { WithStyles } from '@material-ui/styles';
import { List } from 'immutable';

import HabitsHeader from './HabitsHeader';
import habitsPageStyles from './HabitsPage.styles';

import { IHabit } from '../../../models/habit';

export interface IHabitsPageProps extends WithStyles<typeof habitsPageStyles> {
  habits?: List<IHabit>;
  getHabits?: () => void;
}

const HabitsPage: React.FC<IHabitsPageProps> = (props) => {
  const { classes, habits, getHabits } = props as Required<IHabitsPageProps>;
  useEffect(() => {
    if (!(habits && habits.size)) {
      getHabits();
    }
  }, [habits]);
  return (
    <div className={classes.root}>
      <HabitsHeader />
    </div>
  );
};

HabitsPage.defaultProps = {
  habits: List(),
  getHabits: () => null,
};

export default HabitsPage;
