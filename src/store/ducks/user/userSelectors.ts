import { UserState } from './userTypes';
interface UserSelector {
  user: UserState;
}

interface PostSelector {
  user: {
    user: UserState;
  };
}

export const userSelector = (state: UserSelector) => {
  return state.user;
};

export const postSelector = (state: PostSelector) => {
  return state.user.user?.posts;
};
