import { UserActions } from './userTypes';

export const userLogin = (datauser: unknown) => {
  return { type: UserActions.USER_ISON, payload: datauser };
};

export const userSingup = (email: string, password: string) => {
  return {
    type: UserActions.USER_SINGUP,
    payload: {
      email,
      password
    }
  };
};
