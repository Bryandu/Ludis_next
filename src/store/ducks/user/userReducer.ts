import { UserActions, UserState, UserTypeActions } from './userTypes';

const INITIAL_STATE: UserState = {
  isOn: false,
  id: null,
  email: null,
  password: null
};

const userReducer = (state = INITIAL_STATE, action: UserActions): UserState => {
  switch (action.type) {
    case UserTypeActions.USER_SINGUP:
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isOn = action.payload.isOn;
      return state;
    default:
      return state;
  }
};

export default userReducer;
