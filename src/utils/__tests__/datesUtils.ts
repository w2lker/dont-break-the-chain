import moment from 'moment';
import { habitStatus, IHabitDate } from '../../models/habit';
import { emptyDates, filledDates } from '../datesUtilts';

const randomDate = (): string => moment(new Date(+(new Date()) - Math.floor(Math.random() * 10000000000))).toISOString();

describe('filledDates function', () => {
  it('response with empty list for empty input', () => {
    // @ts-ignore
    const result = filledDates(null, null);
    expect(result.size).toBe(0);
  });

  it('response with 2 days for amount=2', () => {
    const date = randomDate();
    const result = filledDates(date, 2);
    expect(result.size).toBe(2);
        // @ts-ignore
    const firstDate: IHabitDate = result.get(0);
    expect(firstDate.date).toBe(date);
    expect(firstDate.status).toBe(habitStatus.end);
    expect(firstDate.score).toBe(2);
        // @ts-ignore
    const lastDate: IHabitDate = result.last();
    const diff = moment(lastDate.date).diff(date);
    expect(diff).toBeLessThanOrEqual(-86400000);
    expect(lastDate.status).toBe(habitStatus.start);
    expect(lastDate.score).toBe(1);
  });

  it('response with 100 days for amount=100', () => {
    const date = randomDate();
    const result = filledDates(date, 100);
    expect(result.size).toBe(100);
        // @ts-ignore
    const first: IHabitDate = result.get(0);
    expect(first.date).toBe(date);
    expect(first.status).toBe(habitStatus.end);
    expect(first.score).toBe(100);
    const lastDate: IHabitDate = result.last();
    expect(lastDate.date).toBe(moment(date).subtract(99, 'd').toISOString());
    expect(lastDate.score).toBe(1);
    expect(lastDate.status).toBe(habitStatus.start);
  });

  it('response with today for no date props', () => {
        // @ts-ignore
    const result = filledDates(null, 5);
        // @ts-ignore
    const diff = moment(result.get(0).date).diff(new moment());
    expect(Math.abs(diff)).toBeLessThan(1000);
  });
});

describe('emptyDates function', () => {
  it('response with empty list for empty input', () => {
    // @ts-ignore
    const result = emptyDates(null, null);
    expect(result.size).toBe(0);
  });

  it('response with 2 days for amount=2', () => {
    const date = randomDate();
    const result = emptyDates(date, 2);
    expect(result.size).toBe(2);
    // @ts-ignore
    expect(result.get(0).date).toBe(date);
    // @ts-ignore
    expect(result.last().date).toBe(moment(date).subtract(1, 'd').toISOString());
    const filtered = result.filter((item) => item.status !== habitStatus.incomplete && item.score !== 0);
    expect(filtered.size).toBe(0);
  });

  it('response with 100 days for amount=100', () => {
    const date = randomDate();
    const result = emptyDates(date, 100);
    expect(result.size).toBe(100);
    const filtered = result.filter((item) => item.status !== habitStatus.incomplete && item.score !== 0);
    expect(filtered.size).toBe(0);
  });

  it('response with today for no date props', () => {
    // @ts-ignore
    const result = emptyDates(null, 5);
    // @ts-ignore
    const diff = moment(result.get(0).date).diff(new moment());
    expect(Math.abs(diff)).toBeLessThan(1000);
  });
});
