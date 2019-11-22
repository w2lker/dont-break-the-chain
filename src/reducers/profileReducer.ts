import { List } from 'immutable';
import { act } from 'react-dom/test-utils';
import { ActionsProfile, PROFILE_GET_ACTIVE, PROFILE_GET_ERROR, PROFILE_GET_SUCCESS } from '../actions/profile';
import { requestStatuses } from '../contants/general';
import { IProfileReducer } from '../models/profile';

const initialState: IProfileReducer = {
  id: 0,
  name: '',
  avatar: '',
  email: '',
  points: 0,
  longestChain: 0,
  historicalView: List(),
  profileRequest: null,
  errorMessage: null,
};

function profileReducer(state: IProfileReducer = initialState, action: ActionsProfile) {

  switch (action.type) {
    case PROFILE_GET_ACTIVE: {
      return {
        ...state,
        profileRequest: requestStatuses.active,
        errorMessage: null,
      };
    }

    case PROFILE_GET_ERROR: {
      return {
        ...state,
        profileRequest: requestStatuses.error,
        errorMessage: action.payload,
      };
    }

    case PROFILE_GET_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        profileRequest: null,
        errorMessage: null,
      };
    }

    default:
      return state;
  }
}

export default profileReducer;
