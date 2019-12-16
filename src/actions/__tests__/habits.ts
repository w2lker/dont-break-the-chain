import { List } from 'immutable';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fakeApi from '../../api/fakeApi';
import habits from '../../api/fakeData/habits';

import { getHabits, getHabitsError, getHabitsStarted, getHabitsSuccess, HabitsGetStatuses } from '../habits';

const testSetup = () => {
  const sampleError = {
    code: 403,
    message: 'Forbidden',
  };
  const sampleHabits = List([{ id: 15 }]);
  const middleWares = [thunk];
  const mockStore = configureMockStore(middleWares);
  const store = mockStore({});
  const sampleResolve = () => {
    return new Promise((resolve => {
      return resolve({
        data: habits,
      });
    }));
  };
  const sampleReject = () => {
    return new Promise((resolve, reject) => {
      return reject({
        error: sampleError,
      });
    });
  };

  const spyCreator = (implementation: () => Promise<any>): jest.SpyInstance => jest.spyOn(fakeApi, 'getHabits').mockImplementation(implementation);
  return { sampleError, sampleHabits, store, sampleResolve, sampleReject, spyCreator };
};

it('getHabitsStarted works', () => {
  expect(getHabitsStarted()).toEqual({
    type: HabitsGetStatuses.active,
  });
});

it('getHabitsError works', () => {
  const { sampleError } = testSetup();
  expect(getHabitsError(sampleError)).toEqual({
    type: HabitsGetStatuses.error,
    payload: sampleError,
  });
});

it('getHabitsSuccess works', () => {
  const { sampleHabits } = testSetup();
  const result = getHabitsSuccess(sampleHabits);
  expect(result.type).toBe(HabitsGetStatuses.success);
  expect(List.isList(result.payload));
  expect(result.payload.size).toBe(1);
});

describe('getHabits function', () => {
  let spy: jest.SpyInstance;
  afterEach(() => {
    spy.mockRestore();
  });
  it('creates dispatches and transferring data received from API module', () => {
    const { store, sampleResolve, spyCreator } = testSetup();
    spy = spyCreator(sampleResolve);
    const expectedActions = [getHabitsStarted(), getHabitsSuccess(habits)];
    // @ts-ignore
    return store.dispatch(getHabits())
      .then(() => {
        const actions = store.getActions();
        expect(fakeApi.getHabits).toBeCalledTimes(1);
        expect(actions).toEqual(expectedActions);
      });
  });

  it('dispatches and transferring error received from API module', () => {
    const { store, sampleReject, spyCreator, sampleError } = testSetup();
    spy = spyCreator(sampleReject);
    const expectedActions = [getHabitsStarted(), getHabitsError(sampleError)];
      // @ts-ignore
    return store.dispatch(getHabits())
        .then(() => {
          const actions = store.getActions();
          expect(fakeApi.getHabits).toBeCalledTimes(1);
          expect(actions).toEqual(expectedActions);
        });
  });
});
