import { List } from 'immutable';
import { ThunkDispatch } from 'redux-thunk';

import fakeApi from '../../api/fakeApi';
import { IHabit, IHabitsError } from '../../models/habit';

export enum HabitsGetStatuses {
  active = 'HABITS/GET/ACTIVE',
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
  payload: List<IHabit>;
}

export function getHabitsStarted() {
  return {
    type: HabitsGetStatuses.active,
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

export function getHabits() {
  return (dispatch: ThunkDispatch<any, any, any>) => {
    dispatch(getHabitsStarted());
    return fakeApi.getHabits().then((response) => {
      // @ts-ignore
      dispatch(getHabitsSuccess(response.data));
    }).catch((response) => {
      dispatch(getHabitsError(response.error));
    });
  };
}

export type GetHabitsActions = IGetHabitsActive | IGetHabitsError | IGetHabitsSuccess;
