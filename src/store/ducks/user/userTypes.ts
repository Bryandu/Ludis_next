export enum UserTypeActions {
  USER_LOGIN = '@user/USER_LOGIN',
  USER_SINGUP = '@user/USER_SINGUP'
}

export interface UserSingUp {
  type: string;
  payload: UserState;
}

export interface UserState {
  isOn: boolean;
  id?: string | number;
  email: string;
  password: string;
}

export type UserActions = UserSingUp;
