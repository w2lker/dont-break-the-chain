import { List } from 'immutable';
import { HabitsGetStatuses } from '../../actions/habits';

import { IHabit, IHabitsReducer } from '../../models/habit';
import habitReducer from '../habitReducer';

const testSetup = () => {
  const initialStateSimple = {
    errorMessage: '',
    habitsRequest: undefined,
  } as IHabitsReducer;

  const initialState: IHabitsReducer = {
    ...initialStateSimple,
    errorMessage: 'Just another error message',
    habits: List(),
  };

  const sampleHabit: IHabit = {
    id: 1,
    name: 'The habit name',
    color: 'pink',
    icon: 'star',
    currentChain: 0,
    longestChain: 0,
    dates: List(),
  };

  return { initialStateSimple, initialState, sampleHabit };
};
describe('habitReduces', () => {

  it('should return initial state', () => {
    const { initialStateSimple } = testSetup();
    // @ts-ignore
    const result = habitReducer(undefined, {});
    expect(result).toMatchObject(initialStateSimple);
  });

  it(`handles ${HabitsGetStatuses.active}`, () => {
    const { initialState } = testSetup();
    const state: IHabitsReducer = {
      ...initialState,
      habitsRequest: HabitsGetStatuses.active,
    };

    expect(habitReducer(state, {
      type: HabitsGetStatuses.active,
    })).toMatchObject({
      errorMessage: null,
      habitsRequest: HabitsGetStatuses.active,
    });
  });

  it(`handles ${HabitsGetStatuses.error}`, () => {
    const { initialState } = testSetup();
    const message = 'Testing error message';
    const state: IHabitsReducer = {
      ...initialState,
      habitsRequest: HabitsGetStatuses.active,
    };
    expect(habitReducer(state, {
      type: HabitsGetStatuses.error,
      payload: message,
    })).toMatchObject({
      errorMessage: message,
      habitsRequest: HabitsGetStatuses.error,
    });
  });

  it(`handles ${HabitsGetStatuses.active}`, () => {
    const { initialState, sampleHabit } = testSetup();
    const state: IHabitsReducer = {
      ...initialState,
      habitsRequest: HabitsGetStatuses.active,
    };

    const result = habitReducer(state, {
      type: HabitsGetStatuses.success,
      payload: List([sampleHabit]),
    });

    expect(result).toMatchObject({
      errorMessage: null,
      habitsRequest: HabitsGetStatuses.success,
    });

    expect(List.isList(result.habits)).toBeTruthy();
    expect(result.habits.size).toBe(1);
    expect(result.habits.last()).toMatchObject(sampleHabit);
  });
});
