import fakeApi from '../api/fakeApi';

export const AUTH_LOGOUT_ACTIVE = 'AUTH/LOGOUT/ACTIVE';
export const AUTH_LOGOUT_ERROR = 'AUTH/LOGOUT/ERROR';
export const AUTH_LOGOUT_SUCCESS = 'AUTH/LOGOUT/SUCCESS';

interface ILogoutActive {
  type: typeof AUTH_LOGOUT_ACTIVE;
}

export function logoutActive() {
  return {
    type: AUTH_LOGOUT_ACTIVE,
  };
}

interface ILogoutError {
  type: typeof AUTH_LOGOUT_ERROR;
  payload: any;
}

// TODO: define error data format
export function logoutError(error: any) {
  return {
    type: AUTH_LOGOUT_ERROR,
    payload: error,
  };
}

interface ILogoutSuccess {
  type: typeof AUTH_LOGOUT_SUCCESS;
  payload: any;
}

// TODO: define success response data format
export function logoutSuccess(data: any) {
  return {
    type: AUTH_LOGOUT_SUCCESS,
    payload: data,
  };
}

export function logout() {
  // TODO: add logout functionality
  // tslint:disable-next-line:no-console
  return (dispatch: any) => {
    dispatch(logoutActive());
    return fakeApi.logout()
      .then((response: any) => {
        dispatch(logoutSuccess(response.data));
      })
      .catch((error: any) => {
        dispatch(logoutError(error.data));
      });
  };
}

export type ActionsAuth = ILogoutActive | ILogoutError | ILogoutSuccess;
