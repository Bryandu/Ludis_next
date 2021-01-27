import { UserState } from './userTypes';

interface user {
  user: UserState;
}

export const selectorLogin = (state: user) => state.user;
