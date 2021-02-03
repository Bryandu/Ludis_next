export interface UserState {
  isOn: boolean;
  data: {
    email: string;
    password: string;
  };
}

export enum UserActions {
  USER_ISON = 'USER_ISON',
  USER_SINGUP = 'USER_SINGUP',
  __NEXT_REDUX_WRAPPER_HYDRATE__ = '__NEXT_REDUX_WRAPPER_HYDRATE__'
}

export interface UserActionLogin {
  type: UserActions.USER_ISON;
  payload: {
    isOn: boolean;
  };
}

export interface UserActionSingUp {
  type: UserActions.USER_SINGUP;
  payload: {
    email: string;
    password: string;
  };
}

export type ActionUser = UserActionLogin | UserActionSingUp;
