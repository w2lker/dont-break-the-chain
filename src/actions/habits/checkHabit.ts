import { ThunkDispatch } from 'redux-thunk';
import { IHabitsError } from '../../models/habit';

export enum HabitCheckStatuses {
  active = 'HABITS/CHECK/ACTIVE',
  error = 'HABITS/CHECK/ERROR',
  success = 'HABITS/CHECK/SUCCESS',
}

interface IHabitCheckPayload {
  id: number;
  checked: boolean;
}

interface IHabitCheckActive {
  type: typeof HabitCheckStatuses.active;
}

interface IHabitCheckError {
  type: typeof HabitCheckStatuses.error;
  payload: IHabitsError;
}

interface IHabitCheckSuccess {
  type: typeof HabitCheckStatuses.success;
  payload: IHabitCheckPayload;
}

export function checkHabitStarted() {
  return {
    type: HabitCheckStatuses.active,
  };
}

export function checkHabitError(errorData: IHabitsError) {
  return {
    type: HabitCheckStatuses.error,
  };
}

export function checkHabitSuccess(id: number, checked: boolean) {
  return {
    type: HabitCheckStatuses.success,
    payload: {
      id,
      checked,
    },
  };
}

export function checkHabit(id: number, desiredStatus: boolean) {
  return (dispatch: ThunkDispatch<any, any, any>) => {
    dispatch(checkHabitStarted());
    // TODO: finalize checking functionality
  };
}
