import { List } from 'immutable';

import { ActionsProfile, ProfileGetStatuses } from '../actions/profile';
import { IProfileReducer } from '../models/profile';

const initialState: IProfileReducer = {
  id: 0,
  name: '',
  avatar: '',
  email: '',
  points: 0,
  longestChain: 0,
  historicalView: List(),
  profileRequest: undefined,
  errorMessage: null,
};

function profileReducer(state: IProfileReducer = initialState, action: ActionsProfile) {

  switch (action.type) {
    case ProfileGetStatuses.active: {
      return {
        ...state,
        profileRequest: ProfileGetStatuses.active,
        errorMessage: null,
      };
    }

    case ProfileGetStatuses.error: {
      return {
        ...state,
        profileRequest: ProfileGetStatuses.error,
        errorMessage: action.payload,
      };
    }

    case ProfileGetStatuses.success: {
      return {
        ...state,
        ...action.payload,
        profileRequest: undefined,
        errorMessage: null,
      };
    }

    default:
      return state;
  }
}

export default profileReducer;
