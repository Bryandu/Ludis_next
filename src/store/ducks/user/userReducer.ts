import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction } from 'redux';

import { ActionUser, UserActions, UserState } from './userTypes';

const Initial_State: UserState = {
  isOn: false,
  data: {
    email: null,
    password: null,
    id: null
  }
};

export const userReducer = (state = Initial_State, action: ActionUser | AnyAction): UserState => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case UserActions.USER_ISON:
      return {
        ...state,
        isOn: true
      };
    case UserActions.USER_SINGUP:
      return { ...state };
    case UserActions.USER_SINGUPSUCCSSES:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
