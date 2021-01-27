import { UserSingUp, UserState, UserTypeActions } from './userTypes';

export const SingUp = (user: UserState): UserSingUp => ({
  type: UserTypeActions.USER_SINGUP,
  payload: user
});
