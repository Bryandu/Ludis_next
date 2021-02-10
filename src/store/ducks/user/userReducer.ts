import { HYDRATE } from 'next-redux-wrapper';

import { ActionUser, UserActions, UserState } from './userTypes';

const User: UserState = {
  isOn: false,
  isActive: false,
  data: {
    id: null,
    email: null,
    password: null
  }
};

export const userReducer = (state = User, action: ActionUser): UserState => {
  switch (action.type) {
    case HYDRATE:
      state == action.payload ? { ...state } : (state = action.payload);
      return { ...state };

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
