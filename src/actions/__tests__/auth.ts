import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import fakeApi from '../../api/fakeApi';

import {
  AUTH_LOGOUT_ACTIVE,
  AUTH_LOGOUT_ERROR,
  AUTH_LOGOUT_SUCCESS, logout,
  logoutActive,
  logoutError,
  logoutSuccess,
} from '../auth';

it('logoutActive works', () => {
  expect(logoutActive()).toEqual({
    type: AUTH_LOGOUT_ACTIVE,
  });
});

it('logoutError works', () => {
  const sampleError = {
    code: 403,
    message: 'Forbidden',
  };
  expect(logoutError(sampleError)).toEqual({
    type: AUTH_LOGOUT_ERROR,
    payload: sampleError,
  });
});

it('logoutSuccess works', () => {
  const sampleResponse = {
    code: 200,
    message: 'Successfully logged out',
  };
  expect(logoutSuccess(sampleResponse)).toEqual({
    type: AUTH_LOGOUT_SUCCESS,
    payload: sampleResponse,
  });
});

describe('logout function', () => {
  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);

  const sampleResponse = {
    code: 200,
    message: 'Successfully logged out',
  };

  const sampleError = {
    code: 403,
    message: 'Forbidden',
  };

  afterEach(() => {
      // @ts-ignore
    fakeApi.logout.mockRestore();
  });

  it('dispatches actions on logout success', () => {
    jest.spyOn(fakeApi, 'logout').mockImplementation(() => {
      return new Promise((resolve, reject) => (resolve({
        data: sampleResponse,
      })),
          );
    });

    const expectedActions = [logoutActive(), logoutSuccess(sampleResponse)];
    const store = mockStore({});

    // @ts-ignore
    return store.dispatch(logout())
          .then(() => {
            const actions = store.getActions();
            expect(fakeApi.logout).toBeCalledTimes(1);
            expect(actions).toEqual(expectedActions);
          });
  });

  it('dispatches actions on logout fail', () => {
    jest.spyOn(fakeApi, 'logout').mockImplementation(() => {
      return new Promise((resolve, reject) => (reject({
        data: sampleError,
      })),
      );
    });

    const expectedActions = [logoutActive(), logoutError(sampleError)];
    const store = mockStore({});

    // @ts-ignore
    return store.dispatch(logout())
      .then(() => {
        const actions = store.getActions();
        expect(fakeApi.logout).toBeCalledTimes(1);
        expect(actions).toEqual(expectedActions);
      });
  });
});
