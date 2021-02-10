export type UserData = {
  id: number | string;
  email: string;
  password: string;
};
export interface UserState {
  isOn: boolean;
  isActive: boolean;
  data: UserData;
}

export enum UserActions {
  USER_LOGIN = 'USER_LOGIN',
  USER_SINGUP = 'USER_SINGUP',
  USER_SINGUPSUCCSSES = 'USER_SINGUPSUCCSSES',
  USER_LOGINSUCCSSES = 'USER_LOGINSUCCSSES',
  USER_LOGINFAIL = 'USER_LOGINFAIL',
  USER_SINGUPFAIL = 'USER_SINGUPFAIL',
  __NEXT_REDUX_WRAPPER_HYDRATE__ = '__NEXT_REDUX_WRAPPER_HYDRATE__'
}

export interface UserActionHydrate {
  type: UserActions.__NEXT_REDUX_WRAPPER_HYDRATE__;
  payload: UserState;
}

export interface UserActionLogin {
  type: UserActions.USER_LOGIN;
  payload: {
    email: string;
    password: string;
  };
}
export interface UserActionLoginSuccsses {
  type: UserActions.USER_LOGINSUCCSSES;
  payload: {
    id: number | string;
    email: string;
    password: string;
  };
}
export interface UserActionLoginFail {
  type: UserActions.USER_LOGINFAIL;
}
export interface UserActionSingUp {
  type: UserActions.USER_SINGUP;
  payload: {
    email: string;
    password: string;
  };
}
export interface UserActionSingupSuccsses {
  type: UserActions.USER_SINGUPSUCCSSES;
}
export interface UserActionSingupFail {
  type: UserActions.USER_SINGUPFAIL;
}

export type ActionUser =
  | UserActionHydrate
  | UserActionSingUp
  | UserActionSingupSuccsses
  | UserActionSingupFail
  | UserActionLogin
  | UserActionLoginSuccsses
  | UserActionLoginFail;
