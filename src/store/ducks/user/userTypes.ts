export type UserData = {
  id: number | string | null;
  email: string | null;
  password: string | null;
};

export type Posts = {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
export interface UserState {
  isOn: boolean | null;
  isActive: boolean | null;
  loading: boolean | null;
  token: string | null;
  data: UserData | null;
  posts: Posts[] | null;
}

export enum UserActions {
  USER_LOGIN = 'USER_LOGIN',
  USER_SINGUP = 'USER_SINGUP',
  USER_SINGUPSUCCSSES = 'USER_SINGUPSUCCSSES',
  USER_LOGINSUCCSSES = 'USER_LOGINSUCCSSES',
  USER_LOGINFAIL = 'USER_LOGINFAIL',
  USER_SINGUPFAIL = 'USER_SINGUPFAIL',
  USER_GETINITIALPOSTS = 'USER_GETINITIALPOSTS',
  USER_GETINITIALPOSTSSUCSSES = 'USER_GETINITIALPOSTSSUCSSES',
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
    id: number | string | null;
    email: string | null;
    password: string | null;
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

export interface UserActionGetInitilPosts {
  type: UserActions.USER_GETINITIALPOSTS;
}

export interface UserActionGetInitilPostsSucsses {
  type: UserActions.USER_GETINITIALPOSTSSUCSSES;
  payload: Posts[];
}

export type ActionUser =
  | UserActionHydrate
  | UserActionSingUp
  | UserActionSingupSuccsses
  | UserActionSingupFail
  | UserActionLogin
  | UserActionLoginSuccsses
  | UserActionLoginFail
  | UserActionGetInitilPosts
  | UserActionGetInitilPostsSucsses;
