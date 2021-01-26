import { UserAction, UserType } from './types';

export const Login = () => ({
  type: UserAction
});

export const SingUp = (user: UserType) => ({
  type: UserAction,
  payload: user
});
