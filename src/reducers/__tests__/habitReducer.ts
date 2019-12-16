import { List } from 'immutable';

import { IHabitsReducer } from '../../models/habit';
import habitReducer from '../habitReducer';

const testSetup = () => {
  const initialStateSimple = {
    errorMessage: 'Just another error message',
    habitsRequest: undefined,
  } as IHabitsReducer;

  const initialState: IHabitsReducer = {
    ...initialStateSimple,
    habits: List(),
  };

  return { initialStateSimple, initialState };
};

it('should return initial state', () => {
  const { initialStateSimple } = testSetup();
  // @ts-ignore
  const result = habitReducer(undefined, {});
  expect(result).toEqual(initialStateSimple);
});

test.todo('sample');
