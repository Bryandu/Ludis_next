export interface UserState {
  isLoged: string;
  token: string;
}

export enum UserActions {
  USER_LOGIN = 'USER_LOGIN',
  USER_LOGOUT = 'USER_LOGOUT'
}

export interface UserLoginAction {
  type: UserActions.USER_LOGIN;
  data: {
    email: string;
    password: string;
  };
}

export interface UserLogoutAction {
  type: UserActions.USER_LOGOUT;
}

type UserActionReducer = UserLoginAction | UserLogoutAction;

const INITIAL_STATE: UserState = {
  isLoged: null,
  token: null
};

export const userLogin = (email: string, password: string): UserLoginAction => ({
  type: UserActions.USER_LOGIN,
  data: {
    email,
    password
  }
});

export const userLogout = (): UserLogoutAction => ({
  type: UserActions.USER_LOGOUT
});

export const userReducer = (state = INITIAL_STATE, action: UserActionReducer): UserState => {
  switch (action.type) {
    case UserActions.USER_LOGIN:
      state.isLoged = action.data.email;
      state.token = action.data.password;
      return state;
    case UserActions.USER_LOGOUT:
      return state;
    default:
      return state;
  }
};
