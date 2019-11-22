import fakeApi from '../api/fakeApi';
import { IProfile } from '../models/profile';

// export const PROFILE_GET = 'PROFILE/GET';
export const PROFILE_GET_ACTIVE = 'PROFILE/GET/ACTIVE';
export const PROFILE_GET_ERROR = 'PROFILE/GET/ERROR';
export const PROFILE_GET_SUCCESS = 'PROFILE/GET/SUCCESS';

interface IGetProfileActive {
  type: typeof PROFILE_GET_ACTIVE;
}

interface IGetProfileError {
  type: typeof PROFILE_GET_ERROR;
  // TODO: define error payload
  payload: any;
}

interface IGetProfileSuccess {
  type: typeof PROFILE_GET_SUCCESS;
  payload: IProfile;
}

export function getProfileStarted() {
  return {
    type: PROFILE_GET_ACTIVE,
  };
}

export function getProfileSuccess(profile: IProfile) {
  return {
    type: PROFILE_GET_SUCCESS,
    payload: profile,
  };
}

export function getProfileError(errorData: any) {
  return {
    type: PROFILE_GET_ERROR,
    payload: errorData,
  };
}

export function getProfile() {
  return (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    dispatch(getProfileStarted());
    fakeApi.getProfile().then((response) => {
      // @ts-ignore
      dispatch(getProfileSuccess(response.data));
    }).catch((response) => {
      dispatch(getProfileError(response.error));
    });
  };
}

export type ActionsProfile = IGetProfileActive | IGetProfileSuccess | IGetProfileError;
