import { List } from 'immutable';

import { ActionsHabits, HabitsGetStatuses } from '../actions/habits';
import { IHabitsReducer } from '../models/habit';

const initialState: IHabitsReducer = {
  habits: List(),
  habitsRequest: undefined,
  errorMessage: '',
};

function habitReducer(state = initialState, action: ActionsHabits) {
  switch (action.type) {

    case HabitsGetStatuses.active: {
      return {
        ...state,
        habitsRequest: HabitsGetStatuses.active,
        errorMessage: null,
      };
    }

    case HabitsGetStatuses.error: {
      return {
        ...state,
        habitsRequest: HabitsGetStatuses.error,
        errorMessage: action.payload,
      };
    }

    case HabitsGetStatuses.success: {
      return {
        ...state,
        habitsRequest: HabitsGetStatuses.success,
        errorMessage: null,
        habits: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export default habitReducer;
