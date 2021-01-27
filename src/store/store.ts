import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './ducks/user/userReducer';

const persistConfig = {
  key: 'root',
  storage
};

const reducers = combineReducers({ user: userReducer });

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer);
export const persistedStore = persistStore(store);
