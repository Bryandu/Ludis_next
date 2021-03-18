import { Posts, UserState } from './userTypes';
interface UserSelector {
  user: UserState;
}
interface PostSelector {
  user: {
    posts: Posts[];
  };
}

export const userSelector = (state: UserSelector) => {
  return state.user;
};

export const postSelector = (state: PostSelector) => {
  return state.user?.posts;
};
