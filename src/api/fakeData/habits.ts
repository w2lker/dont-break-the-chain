import { List } from 'immutable';
import moment from 'moment';

import { habitStatus, IHabit, IHabitDate } from '../../models/habit';

function filledDates(endDate: string, amount: number): List<IHabitDate> {
  const firstDay = List([{
    date: endDate,
    status: habitStatus.end,
    score: amount,
  }]);

  const middleDays = Array(amount - 1)
    .map((item, index) => {
      return {
        date: moment(endDate).subtract(index + 1, 'd').toISOString(),
        status: habitStatus.complete,
        score: amount - index + 1,
      };
    });

  return firstDay.concat(middleDays).push({
    date: moment(endDate).subtract(amount - 1, 'd').toISOString(),
    status: habitStatus.start,
    score: 1,
  });
}

function singleEmptyDate(date: string, today= false): IHabitDate {
  return {
    date,
    status: today ? habitStatus.incompleteToday : habitStatus.incomplete,
    score: 0,
  };
}

function emptyDates(endDate: string, amount: number): List<IHabitDate> {

  const emptyArray: IHabitDate[] = Array(amount - 1)
    .map((item, index) => {
      return singleEmptyDate(moment(endDate).subtract(index, 'd').toISOString());
    });

  return List(emptyArray);
}

const habit1: IHabit = {
  id: 1,
  name: 'Morning runs',
  icon: 'run-fast',
  color: 'blue',
  currentChain: 12,
  longestChain: 45,
  dates: List().concat(
    filledDates(moment().toISOString(), 12),
    emptyDates(moment().subtract(12, 'd').toISOString(), 2),
    filledDates(moment().subtract(14, 'd').toISOString(), 11),
    emptyDates(moment().subtract(25, 'd').toISOString(), 3),
    filledDates(moment().subtract(28, 'd').toISOString(), 45),
  ),
};

const habit2: IHabit = {
  id: 2,
  name: '1h reading',
  icon: 'newspaper',
  color: 'orange',
  currentChain: 35,
  longestChain: 35,
  dates: List([singleEmptyDate(moment().toISOString(), true)]).concat(
    filledDates(moment().subtract(1, 'd').toISOString(), 35),
    emptyDates(moment().subtract(35, 'd').toISOString(), 3),
    filledDates(moment().subtract(38, 'd').toISOString(), 9),
  ),
};
const habit3: IHabit = {
  id: 15,
  name: 'Spend time with family',
  icon: 'account-group',
  color: 'pink',
  currentChain: 8,
  longestChain: 8,
  dates: List([singleEmptyDate(moment().toISOString(), true)]).concat(
    filledDates(moment().subtract(1, 'd').toISOString(), 8),
  ),
};

const habits: List<IHabit> = List([habit1, habit2, habit3]);

export default habits;
