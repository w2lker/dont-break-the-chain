
import { List } from 'immutable';
import { IHabit, IHabitsError } from '../models/habit';

export enum HabitsGetStatuses {
  active= 'HABITS/GET/ACTIVE',
  error = 'HABITS/GET/ERROR',
  success = 'HABITS/GET/SUCCESS',
}

interface IGetHabitsActive {
  type: typeof HabitsGetStatuses.active;
}

interface IGetHabitsError {
  type: typeof HabitsGetStatuses.error;
  payload: IHabitsError;
}

interface IGetHabitsSuccess {
  type: typeof HabitsGetStatuses.success;
  // TODO: define data model for response
  payload: List<IHabit>;
}

export function getHabitsStarted() {
  return {
    payload: HabitsGetStatuses.active,
  };
}

export function getHabitsError(errorData: IHabitsError) {
  return {
    type: HabitsGetStatuses.error,
    payload: errorData,
  };
}

export function getHabitsSuccess(habits: any) {
  return {
    type: HabitsGetStatuses.success,
    payload: habits,
  };
}

export type ActionsHabits = IGetHabitsActive | IGetHabitsError | IGetHabitsSuccess;
