import { HYDRATE } from 'next-redux-wrapper';

import { ActionUser, UserActions, UserState } from './userTypes';

const User: UserState = {
  isOn: null,
  isActive: null,
  data: {
    id: null,
    email: null,
    password: null
  }
};

export const userReducer = (state = User, action: ActionUser): UserState => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case UserActions.USER_SINGUPFAIL:
      return { ...state, isActive: false };

    case UserActions.USER_SINGUPSUCCSSES:
      return { ...state, isActive: true };

    case UserActions.USER_LOGINFAIL:
      return { ...state, isOn: false };

    case UserActions.USER_LOGINSUCCSSES:
      return { ...state, isOn: true, data: action.payload };

    default:
      return state;
  }
};
