import { HYDRATE } from 'next-redux-wrapper';
import { Action } from 'redux';

import { GenericActions } from '../genericActions';
import { ActionUser, UserActions, UserState } from './userTypes';

const User: UserState = {
  isOn: null,
  isActive: null,
  loading: false,
  user: {
    token: null,
    id: null,
    name: null,
    photoProfile: null,
    email: null,
    password: null,
    posts: null
  }
};

const reducer = (state = User, action: ActionUser | Action<GenericActions>): UserState => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case UserActions.USER_SINGUPFAIL:
      return { ...state, isActive: false };

    case UserActions.USER_SINGUPSUCCSSES:
      return { ...state, isActive: true };

    case UserActions.USER_LOGINFAIL:
      return { ...state, isOn: false };

    case UserActions.USER_LOGINSUCCESSES:
      return { ...state, isOn: true, user: action.payload };

    case UserActions.USER_GETMOREPOSTS:
      return { ...state, user: { posts: action.payload } };

    case UserActions.USER_SETTOKEN:
      return { ...state, user: { token: action.payload } };

    case GenericActions.LOADING:
      return { ...state, loading: true };

    case GenericActions.LOADINGEND:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default reducer;
