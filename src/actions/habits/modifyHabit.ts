import { ThunkDispatch } from 'redux-thunk';
import { IHabit, IHabitsError } from '../../models/habit';

export enum HabitModificationStatuses {
  active = 'HABITS/CHECK/ACTIVE',
  error = 'HABITS/CHECK/ERROR',
  success = 'HABITS/CHECK/SUCCESS',
}

interface IHabitModificationActive {
  type: typeof HabitModificationStatuses.active;
}

interface IHabitModificationError {
  type: typeof HabitModificationStatuses.error;
  payload: IHabitsError;
}

interface IHabitModificationSuccess {
  type: typeof HabitModificationStatuses.success;
  payload: IHabit;
}

export function habitModificationStarted(): IHabitModificationActive {
  return {
    type: HabitModificationStatuses.active,
  };
}

export function habitModificationError(errorData: IHabitsError): IHabitModificationError {
  return {
    type: HabitModificationStatuses.error,
    payload: errorData,
  };
}

export function habitModificationSuccess(payload: IHabit): IHabitModificationSuccess {
  return {
    payload,
    type: HabitModificationStatuses.success,
  };
}

export function habitCompleteSwitch(id: number, desiredStatus: boolean) {
  return (dispatch: ThunkDispatch<any, any, any>) => {
    dispatch(habitModificationStarted());
    // TODO: finalize checking functionality
  };
}
