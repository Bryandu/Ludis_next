import { combineReducers, createStore } from 'redux';
import { userReducer } from './ducks/user/user';

const rootReducer = combineReducers({
  user: userReducer
});

export const store = createStore(rootReducer);
