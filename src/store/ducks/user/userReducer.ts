import { HYDRATE } from 'next-redux-wrapper';
import { Action } from 'redux';

import { GenericActions } from '../genericActions';
import { ActionUser, UserActions, UserState } from './userTypes';

const User: UserState = {
  isOn: null,
  isActive: null,
  loading: false,
  token: null,
  data: {
    id: null,
    email: null,
    password: null
  },
  posts: undefined
};

const reducer = (state = User, action: ActionUser | Action<GenericActions>): UserState => {
  switch (action.type) {
    case HYDRATE:
      if (state === action.payload) {
        return { ...state };
      }
      return { ...state, ...action.payload };

    case UserActions.USER_SINGUPFAIL:
      return { ...state, isActive: false };

    case UserActions.USER_SINGUPSUCCSSES:
      return { ...state, isActive: true };

    case UserActions.USER_LOGINFAIL:
      return { ...state, isOn: false };

    case UserActions.USER_LOGINSUCCSSES:
      return { ...state, isOn: true, data: action.payload };

    case UserActions.USER_GETPOSTSSUCSSES:
      return { ...state, posts: action.payload };

    case UserActions.USER_GETMOREPOSTS:
      return { ...state, posts: action.payload };

    case GenericActions.LOADING:
      return { ...state, loading: true };

    case GenericActions.LOADINGEND:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default reducer;
