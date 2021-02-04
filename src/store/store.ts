import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';
import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { Task } from 'redux-saga';

import { userReducer } from './ducks/user/userReducer';
import { UserState } from './ducks/user/userTypes';
import rootSaga from './sagas';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const reducers = combineReducers({
  user: userReducer
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const makeStore: MakeStore<UserState> = (context: Context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store: SagaStore = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper<UserState>(makeStore, { debug: true });
