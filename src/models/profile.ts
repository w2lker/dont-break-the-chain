import { List } from 'immutable';
import { ProfileGetStatuses } from '../actions/profile';

export interface IDailyProgress {
  date: string;
  value: number;
}

export interface IProfile {
  id: number;
  name: string;
  avatar: string;
  email: string;
  points: number;
  longestChain: number;
  historicalView: List<IDailyProgress>;
}

// TODO: define error data model
export type IProfileError = any;

export interface IProfileReducer extends IProfile {
  profileRequest?: typeof ProfileGetStatuses;
  errorMessage: IProfileError;
}
