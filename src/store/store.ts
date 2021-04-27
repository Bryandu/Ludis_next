import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { Task } from 'redux-saga';

import reducer from './ducks/user/userReducer';
import { UserState } from './ducks/user/userTypes';
import rootSaga from './sagas';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const reducers = combineReducers({
  user: reducer
});

const makeStore: MakeStore<UserState> = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store: SagaStore = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const storeWrapper = createWrapper<UserState>(makeStore, { debug: true });
