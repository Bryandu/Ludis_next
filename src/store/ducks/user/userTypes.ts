export type UserData = {
  id: number;
  email: string;
  password: string;
};
export interface UserState {
  isOn: boolean;
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

export interface UserActionLoginSuccsses {
  type: UserActions.USER_LOGINSUCCSSES;
  payload: {
    id: string | number;
    email: string;
    password: string;
  };
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
  payload: UserData;
}

export type ActionUser = UserActionSingUp | UserActionSingupSuccsses | UserActionLoginSuccsses;
