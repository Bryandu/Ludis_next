import {
  Posts,
  UserActionGetInitialPosts,
  UserActionGetPostsSuccesses,
  UserActionLoginFail,
  UserActionLoginSuccesses,
  UserActions,
  UserActionSetToken,
  UserActionSingUp,
  UserActionSingupSuccesses,
  UserData
} from './userTypes';

export const userLogin = (email: string, password: string) => {
  return { type: UserActions.USER_LOGIN, payload: { email, password } };
};

export const userSingup = (name: string, email: string, password: string): UserActionSingUp => {
  return {
    type: UserActions.USER_SINGUP,
    payload: {
      name,
      email,
      password
    }
  };
};

export const userSingupSuccesses = (): UserActionSingupSuccesses => {
  return {
    type: UserActions.USER_SINGUPSUCCSSES
  };
};

export const userSingupFail = () => {
  return {
    type: UserActions.USER_SINGUPFAIL
  };
};

export const userLoginSuccesses = (data: UserData): UserActionLoginSuccesses => {
  return {
    type: UserActions.USER_LOGINSUCCESSES,
    payload: data
  };
};

export const userLoginFail = (): UserActionLoginFail => {
  return {
    type: UserActions.USER_LOGINFAIL
  };
};

export const userGetInitialPosts = (): UserActionGetInitialPosts => {
  return {
    type: UserActions.USER_GETINITIALPOSTS
  };
};

export const userGetPostsSuccesses = (posts: Posts[]): UserActionGetPostsSuccesses => {
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

export const userSetToken = (token: string): UserActionSetToken => {
  return {
    type: UserActions.USER_SETTOKEN,
    payload: token
  };
};
