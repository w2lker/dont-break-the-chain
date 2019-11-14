import {List} from 'immutable';
import {colorsKeys} from "../contants/colors";

export const habitStatus = {
  incomplete: 0,
  complete: 1,
  paused: 2,
  start: 3,
  end: 4,
  incompleteToday: 5
};

export interface IHabitDate {
  date?: any;
  status?: string;
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