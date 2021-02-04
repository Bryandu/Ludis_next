export type UserData = {
  email: string;
  password: string;
  id: string | number;
};
export interface UserState {
  isOn: boolean;
  data: UserData;
}

export enum UserActions {
  USER_ISON = 'USER_ISON',
  USER_SINGUP = 'USER_SINGUP',
  USER_SINGUPSUCCSSES = 'USER_SINGUPSUCCSSES',
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

export interface UserActionSingupSuccsses {
  type: UserActions.USER_SINGUPSUCCSSES;
  payload: UserData;
}

export type ActionUser = UserActionLogin | UserActionSingUp | UserActionSingupSuccsses;
