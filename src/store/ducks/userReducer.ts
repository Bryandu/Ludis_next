import { UserAction, UserState } from './types';

const INITIAL_STATE: UserState = {
  id: null,
  email: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserAction.USER_SINGUP:
      return console.log(`Usuário cadastrado`);
    default:
      return state;
  }
};

export default userReducer;
