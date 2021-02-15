import { UserState } from './userTypes';

interface UserSelector {
  user: UserState;
}

export const userSelector = (state: UserSelector) => {
  console.log(state.user);
  return state.user;
};
