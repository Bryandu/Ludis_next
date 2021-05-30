import { Posts, UserState } from './userTypes';
export interface UserSelector {
  userState: UserState;
}
export interface PostSelector {
  user: {
    posts: Posts[];
  };
}

export const userSelector = (state: UserSelector) => {
  return state.userState;
};

export const postSelector = (state: PostSelector) => {
  return state.user?.posts;
};
