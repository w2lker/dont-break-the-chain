import { PROFILE_GET_ACTIVE, PROFILE_GET_ERROR, PROFILE_GET_SUCCESS } from '../../actions/profile';
import { requestStatuses } from '../../contants/general';
import { IProfile } from '../../models/profile';
import profileReducer from '../profileReducer';

// @ts-ignore
const initialState: IProfile = {
  id: 0,
  name: '',
  avatar: '',
  email: '',
  points: 0,
  longestChain: 0,
};

describe('profileReducer', () => {
  it('should return initial state', () => {
    // @ts-ignore
    expect(profileReducer(undefined, {})).toMatchObject(initialState);
  });

  it('should handle PROFILE_GET_ACTIVE', () => {
    const state = {
      ...initialState,
      profileRequest: requestStatuses.success,
      errorMessage: 'Another error message',
    };
    // @ts-ignore
    expect(profileReducer(state, {
      type: PROFILE_GET_ACTIVE,
    })).toMatchObject({
      profileRequest: requestStatuses.active,
      errorMessage: null,
    });
  });

  it('should handle PROFILE_GET_ERROR', () => {
    const message = 'The error message';
    const state = {
      ...initialState,
      profileRequest: requestStatuses.success,
      errorMessage: 'Another error message',
    };
    // @ts-ignore
    expect(profileReducer(message, {
      type: PROFILE_GET_ERROR,
      payload: message,
    })).toMatchObject({
      profileRequest: requestStatuses.error,
      errorMessage: message,
    });
  });

  it('should handle PROFILE_GET_SUCCESS', () => {

    const state = {
      ...initialState,
      profileRequest: requestStatuses.active,
      errorMessage: 'Another error message',
    };
    // @ts-ignore

    // @ts-ignore
    const newState: IProfile = {
      id: 12,
      name: 'Some name',
      avatar: 'http://google.com',
      email: 'tester@gmail.com',
      points: 564,
      longestChain: 564,
    };

      // @ts-ignore
    expect(profileReducer(initialState, {
      type: PROFILE_GET_SUCCESS,
      payload: newState,
    })).toMatchObject({
      ...newState,
      profileRequest: null,
      errorMessage: null,
    });
  });
});
