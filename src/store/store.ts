import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';
import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userReducer } from './ducks/user/userReducer';
import { UserState } from './ducks/user/userTypes';

const reducers = combineReducers({
  user: userReducer
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const makeStore: MakeStore<UserState> = (context: Context) =>
  createStore(reducers, composeWithDevTools());

export const wrapper = createWrapper<UserState>(makeStore, { debug: true });
