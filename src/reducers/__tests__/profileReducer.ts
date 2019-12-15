import { List } from 'immutable';

import { ProfileGetStatuses } from '../../actions/profile';
import { IProfile, IProfileReducer } from '../../models/profile';
import profileReducer from '../profileReducer';

const testSetup = () => {
  const initialStateSimple = {
    id: 0,
    name: '',
    avatar: '',
    email: '',
    points: 0,
    longestChain: 0,
  } as IProfileReducer;

  const initialState: IProfileReducer = {
    ...initialStateSimple,
    historicalView: List(),
    errorMessage: 'Just another error message',
  };
  return { initialState, initialStateSimple };
};

describe('profileReducer', () => {
  it('should return initial state', () => {
    const { initialStateSimple } = testSetup();
    // @ts-ignore
    expect(profileReducer(undefined, {})).toMatchObject(initialStateSimple);
  });

  it('should handle PROFILE_GET_ACTIVE', () => {
    const { initialState } = testSetup();
    const state = {
      ...initialState,
      profileRequest: null,
    };
    // @ts-ignore
    expect(profileReducer(state, {
      type: ProfileGetStatuses.active,
    })).toMatchObject({
      profileRequest: ProfileGetStatuses.active,
      errorMessage: null,
    });
  });

  it('should handle PROFILE_GET_ERROR', () => {
    const { initialState } = testSetup();
    const message = 'The error message';
    const state = {
      ...initialState,
      profileRequest: ProfileGetStatuses.active,
    };
    // @ts-ignore
    expect(profileReducer(message, {
      type: ProfileGetStatuses.error,
      payload: message,
    })).toMatchObject({
      profileRequest: ProfileGetStatuses.error,
      errorMessage: message,
    });
  });

  it('should handle PROFILE_GET_SUCCESS', () => {
    const { initialState } = testSetup();
    const state = {
      ...initialState,
      profileRequest: ProfileGetStatuses.active,
    };

    const newState: IProfile = {
      id: 12,
      name: 'Some name',
      avatar: 'http://google.com',
      email: 'tester@gmail.com',
      points: 564,
      longestChain: 564,
      historicalView: List(),
    };

    const expectedState = {
      ...newState,
      profileRequest: undefined,
      errorMessage: null,
    } as IProfileReducer;

    delete expectedState.historicalView;

    expect(profileReducer(initialState, {
      type: ProfileGetStatuses.success,
      payload: newState,
    })).toMatchObject(expectedState);
  });
});
