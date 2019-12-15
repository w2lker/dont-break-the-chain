import fakeApi from '../api/fakeApi';
import { IProfile } from '../models/profile';

// export const PROFILE_GET = 'PROFILE/GET';
export enum ProfileGetStatuses {
  active = 'PROFILE/GET/ACTIVE',
  error = 'PROFILE/GET/ERROR',
  success = 'PROFILE/GET/SUCCESS',
}

interface IGetProfileActive {
  type: typeof ProfileGetStatuses.active;
}

interface IGetProfileError {
  type: typeof ProfileGetStatuses.error;
  payload: any;
}

interface IGetProfileSuccess {
  type: typeof ProfileGetStatuses.success;
  payload: IProfile;
}

export function getProfileStarted() {
  return {
    type: ProfileGetStatuses.active,
  };
}

export function getProfileSuccess(profile: IProfile) {
  return {
    type: ProfileGetStatuses.success,
    payload: profile,
  };
}

export function getProfileError(errorData: any) {
  return {
    type: ProfileGetStatuses.error,
    payload: errorData,
  };
}

export function getProfile() {
  return (dispatch: any): any => {
    dispatch(getProfileStarted());
    return fakeApi.getProfile().then((response) => {
      // @ts-ignore
      dispatch(getProfileSuccess(response.data));
    }).catch((response) => {
      dispatch(getProfileError(response.error));
    });
  };
}

export type ActionsProfile = IGetProfileActive | IGetProfileSuccess | IGetProfileError;
