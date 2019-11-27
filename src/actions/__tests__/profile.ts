import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fakeApi from '../../api/fakeApi';

import {
  getProfile,
  getProfileError,
  getProfileStarted,
  getProfileSuccess,
  PROFILE_GET_ACTIVE,
  PROFILE_GET_ERROR,
  PROFILE_GET_SUCCESS,
} from '../profile';

it('getProfileStarted works', () => {
  expect(getProfileStarted()).toEqual({
    type: PROFILE_GET_ACTIVE,
  });
});

it('getProfileError works', () => {
  const sampleError = {
    code: 403,
    message: 'Forbidden',
  };
  expect(getProfileError(sampleError)).toEqual({
    type: PROFILE_GET_ERROR,
    payload: sampleError,
  });
});

it('getProfileSuccess works', () => {
  const sampleProfile = {
    name: 'w2lker',
  };
    // @ts-ignore
  expect(getProfileSuccess(sampleProfile)).toEqual({
    type: PROFILE_GET_SUCCESS,
    payload: sampleProfile,
  });
});

describe('getProfile function', () => {
  const sampleProfile = {
    id: 3423,
    name: 'Test User',
    avatar: './img.png',
    email: 'tester@gmail.com',
    points: 245,
    longestChain: 12,
  };
  const middleWares = [thunk];
  const mockStore = configureMockStore(middleWares);

  afterEach(() => {
    // @ts-ignore
    fakeApi.getProfile.mockRestore();
  });

  it('creates dispatches and transferring data received from API module', () => {

    jest.spyOn(fakeApi, 'getProfile').mockImplementation(() => {
      return new Promise((resolve, reject) => (resolve({
        data: sampleProfile,
      })),
      );
    });

    // @ts-ignore
    const expectedActions = [getProfileStarted(), getProfileSuccess(sampleProfile)];

    const store = mockStore({});
    // const result = store.dispatch(getProfile());

      // @ts-ignore
    return store.dispatch(getProfile())
      .then(() => {
        const actions = store.getActions();
        expect(fakeApi.getProfile).toBeCalledTimes(1);
        expect(actions).toEqual(expectedActions);
      });
  });

  it('dispatches and transferring error received from API module', () => {

    const sampleError = {
      code: 403,
      message: 'Forbidden',
    };

    jest.spyOn(fakeApi, 'getProfile').mockImplementation(() => {
      return new Promise((resolve, reject) => (reject({
        error: sampleError,
      })),
      );
    });

    // @ts-ignore
    const expectedActions = [getProfileStarted(), getProfileError(sampleError)];

    const store = mockStore({});
    // const result = store.dispatch(getProfile());

    // @ts-ignore
    return store.dispatch(getProfile())
      .then(() => {
        const actions = store.getActions();
        expect(fakeApi.getProfile).toBeCalledTimes(1);
        expect(actions).toEqual(expectedActions);
      });
  });

});
