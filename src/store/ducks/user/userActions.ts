import { UserActions, UserActionSingUp, UserActionSingupSuccsses, UserData } from './userTypes';

export const userLogin = (datauser: unknown) => {
  return { type: UserActions.USER_ISON, payload: datauser };
};

export const userSingup = (email: string, password: string): UserActionSingUp => {
  return {
    type: UserActions.USER_SINGUP,
    payload: {
      email,
      password
    }
  };
};

export const userSingupSeccsses = (data: UserData): UserActionSingupSuccsses => {
  return {
    type: UserActions.USER_SINGUPSUCCSSES,
    payload: data
  };
};
