import { UserState } from './user';

interface UserSelectors {
  user: UserState;
}

export const userSelector = (state: UserSelectors) => state.user;
