import React from 'react';

import { Route, RouteComponentProps } from 'react-router-dom';

import HabitsPage from '../HabitsPage';
import HabitCreate from '../HabitsPage/HabitCreate';

import { routing } from '../../../contants/routing';

export interface IHabitsRootProps extends RouteComponentProps<any> {}

const HabitsRouter: React.FC<IHabitsRootProps> = (props) => {
  const {} = props;
  const habitsRouting = routing.habits;
  return (
    <React.Fragment>
      <Route component={HabitsPage} />
      <Route path={habitsRouting.root + habitsRouting.create} component={HabitCreate} />
      <Route path={habitsRouting.root + habitsRouting.update} component={HabitCreate} />
    </React.Fragment>
  );
};

export default HabitsRouter;
