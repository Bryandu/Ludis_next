import { UserState } from './userTypes';
interface UserSelector {
  user: UserState;
}

export const userSelector = (state: UserSelector) => {
  return state.user;
};
