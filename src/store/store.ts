import { combineReducers, createStore } from 'redux';
import userReducer from './ducks/userReducer';

const reducers = combineReducers({ userReducer });

const store = createStore(reducers);

export default store;
