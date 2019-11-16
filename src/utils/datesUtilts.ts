// // ------------------------------------
// // Sample Dates Generators
// // -------------------------------------

import { List } from 'immutable';
import moment from 'moment';

import { habitStatus, IHabitDate } from '../models/habit';

export function filledDates(endDate: string, amount: number): List<IHabitDate> {

  if (!amount) {
    return List();
  }

  const date = endDate || moment().toISOString();

  let result: List<IHabitDate> = List([{
    date,
    status: habitStatus.end,
    score: amount,
  }]);

  if (amount === 1) {
    return result;
  }

  for (let i = 1; i < amount - 1; i += 1) {
    result = result.push({
      // @ts-ignore
      date: moment(date).subtract(i, 'd').toISOString(),
      status: habitStatus.complete,
      score: amount - i,
    });
  }
  return result.push({
    // @ts-ignore
    date: moment(date).subtract(amount - 1, 'd').toISOString(),
    status: habitStatus.start,
    score: 1,
  });
}
function singleEmptyDate(date: string, today= false): IHabitDate {
  return {
    date: date || moment().toISOString(),
    status: today ? habitStatus.incompleteToday : habitStatus.incomplete,
    score: 0,
  };
}
export function emptyDates(endDate: string, amount: number): List<IHabitDate> {
  let result = List();
  for (let i = 0; i < amount; i += 1) {
    // @ts-ignore
    result = result.push(singleEmptyDate(moment(endDate).subtract(i, 'd').toISOString()));
  }
  return result;
}
