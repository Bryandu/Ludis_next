import { UserState } from './userTypes';

interface UserSelector {
  user: UserState;
}

export const userSelector = (state: UserSelector): UserState => {
  return state.user;
};
