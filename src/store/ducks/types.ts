export enum UserAction {
  USER_LOGIN = '@login/USER_LOGIN',
  USER_SINGUP = '@singup/USER_SINGUP'
}

export interface UserType {
  id: string;
  email: string;
}

export interface UserState {
  id: string;
  email: string;
}
