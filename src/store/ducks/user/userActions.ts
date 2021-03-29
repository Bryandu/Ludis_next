import {
  Posts,
  UserActionGetInitilPosts,
  UserActionLoginSuccsses,
  UserActions,
  UserActionSingUp,
  UserActionSingupSuccsses,
  UserData
} from './userTypes';

export const userLogin = (email: string, password: string) => {
  return { type: UserActions.USER_LOGIN, payload: { email, password } };
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

export const userSingupSeccsses = (): UserActionSingupSuccsses => {
  return {
    type: UserActions.USER_SINGUPSUCCSSES
  };
};

export const userSingupFail = () => {
  return {
    type: UserActions.USER_SINGUPFAIL
  };
};

export const userLoginSuccsses = (data: UserData): UserActionLoginSuccsses => {
  return {
    type: UserActions.USER_LOGINSUCCSSES,
    payload: data
  };
};

export const userLoginFail = () => {
  return {
    type: UserActions.USER_LOGINFAIL
  };
};

export const userGetInitialPosts = (): UserActionGetInitilPosts => {
  return {
    type: UserActions.USER_GETINITIALPOSTS
  };
};

export const userGetPostsSucsses = (posts: Posts[]) => {
  return {
    type: UserActions.USER_GETPOSTSSUCSSES,
    payload: posts
  };
};

export const userGetMorePosts = (posts: (Posts | undefined)[]) => {
  return {
    type: UserActions.USER_GETMOREPOSTS,
    payload: posts
  };
};
