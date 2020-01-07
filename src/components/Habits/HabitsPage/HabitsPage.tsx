import React, { useEffect } from 'react';

import { WithStyles } from '@material-ui/styles';
import { List } from 'immutable';
import HabitItem from './HabitItem';

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
    if (!(habits && habits.size) && getHabits) {
      getHabits();
    }
  }, [habits, getHabits]);
  const renderHabits = habits.map((habit, index) => (
    <HabitItem
      key={habit.id}
      content={habit}
      isLast={index === habits.size - 1}
    />
  ));
  return (
    <div className={classes.root}>
      <HabitsHeader />
      { renderHabits }
    </div>
  );
};

HabitsPage.defaultProps = {
  habits: List(),
  getHabits: () => null,
};

export default HabitsPage;
