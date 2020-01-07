import { List } from 'immutable';
import { HabitsGetStatuses } from '../actions/habits/getHabits';
import { colorsKeys } from '../contants/colors';

export enum habitStatus {
  incomplete= 'habitStatus/incomplete',
  complete = 'habitStatus/completed',
  paused = 'habitStatus/paused',
  start = 'habitStatus/started',
  end = 'habitStatus/ended',
  incompleteToday = 'habitStatus/incompleteToday',
}

export type habitStatusesType =  'habitStatus/incomplete' | 'habitStatus/completed' | 'habitStatus/paused' | 'habitStatus/started' | 'habitStatus/ended' | 'habitStatus/incompleteToday';

export interface IHabitDate {
  date?: any;
  status?: habitStatusesType | string;
  score?: number;
}

export interface IHabit {
  id?: number;
  name?: string;
  color?: colorsKeys;
  icon?: string;
  currentChain?: number;
  longestChain?: number;
  dates?: List<IHabitDate>;
}

// TODO: define error data model
export type IHabitsError = any;

export interface IHabitsReducer {
  habits: List<IHabit>;
  habitsRequest?: HabitsGetStatuses;
  errorMessage: IHabitsError;
}
