import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction } from 'redux';

import { ActionUser, UserActions, UserState } from './userTypes';

const User: UserState = {
  isOn: false,
  data: {
    email: null,
    id: null,
    password: null
  }
};

export const userReducer = (state = User, action: ActionUser | AnyAction): UserState => {
  switch (action.type) {
    case HYDRATE:
      state == action.payload ? state : (state = action.payload);
      return state;

    case UserActions.USER_SINGUPFAIL:
      return { ...state, isOn: false };

    case UserActions.USER_SINGUPSUCCSSES:
      return { ...state, data: action.payload };

    case UserActions.USER_LOGINFAIL:
      return { ...state, isOn: false };

    case UserActions.USER_LOGINSUCCSSES:
      return { ...state, isOn: true, data: action.payload };

    default:
      return state;
  }
};
