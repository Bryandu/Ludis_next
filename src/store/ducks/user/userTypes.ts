export type UserData = {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  password?: string | null;
  posts?: Posts[] | null;
  photoProfile?: string | null;
  token?: string | null;
};

export type Posts = {
  id: string;
  name: string;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
export interface UserState {
  isOn: boolean | undefined;
  isActive: boolean | undefined;
  loading: boolean | undefined;
  user: UserData | undefined;
}

export enum UserActions {
  USER_LOGIN = 'USER_LOGIN',
  USER_SINGUP = 'USER_SINGUP',
  USER_SINGUPSUCCSSES = 'USER_SINGUPSUCCSSES',
  USER_LOGINSUCCESSES = 'USER_LOGINSUCCESSES',
  USER_LOGINFAIL = 'USER_LOGINFAIL',
  USER_SINGUPFAIL = 'USER_SINGUPFAIL',
  USER_GETINITIALPOSTS = 'USER_GETINITIALPOSTS',
  USER_GETMOREPOSTS = 'USER_GETMOREPOSTS',
  USER_GETPOSTSSUCSSES = 'USER_GETINITIALPOSTSSUCSSES',
  USER_SETTOKEN = 'USER_SETTOKEN',
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
export interface UserActionLoginSuccesses {
  type: UserActions.USER_LOGINSUCCESSES;
  payload: UserData;
}
export interface UserActionLoginFail {
  type: UserActions.USER_LOGINFAIL;
}
export interface UserActionSingUp {
  type: UserActions.USER_SINGUP;
  payload: {
    name: string;
    email: string;
    password: string;
  };
}
export interface UserActionSingupSuccesses {
  type: UserActions.USER_SINGUPSUCCSSES;
}
export interface UserActionSingupFail {
  type: UserActions.USER_SINGUPFAIL;
}

export interface UserActionGetInitialPosts {
  type: UserActions.USER_GETINITIALPOSTS;
}

export interface UserActionGetMorePosts {
  type: UserActions.USER_GETMOREPOSTS;
  payload: Posts[];
}

export interface UserActionGetPostsSuccesses {
  type: UserActions.USER_GETPOSTSSUCSSES;
  payload: Posts[];
}

export interface UserActionSetToken {
  type: UserActions.USER_SETTOKEN;
  payload: string;
}

export type ActionUser =
  | UserActionHydrate
  | UserActionSingUp
  | UserActionSingupSuccesses
  | UserActionSingupFail
  | UserActionLogin
  | UserActionLoginSuccesses
  | UserActionLoginFail
  | UserActionGetInitialPosts
  | UserActionGetMorePosts
  | UserActionGetPostsSuccesses
  | UserActionSetToken;
