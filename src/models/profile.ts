import { List } from 'immutable';
import { RequestStatuses } from './general';

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

export interface IProfileReducer extends IProfile {
  profileRequest: RequestStatuses;
  errorMessage: string | null;
}
