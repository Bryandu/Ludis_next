import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { Store } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware, { Task } from 'redux-saga';

import userSlice from './ducks/user/userSlice';
import rootSaga from './sagas';
export interface SagaStore extends Store {
  sagaTask?: Task;
}

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, logger];

  const store: SagaStore = configureStore({
    devTools: true,
    middleware: [...getDefaultMiddleware({ thunk: false }), ...middlewares],
    reducer: {
      [userSlice.name]: userSlice.reducer
    }
  });

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};
// const reducers = combineReducers({
//   user: reducer
// });

// const makeStore: MakeStore<UserState> = () => {
//   const sagaMiddleware = createSagaMiddleware();
//   const store: SagaStore = createStore(
//     reducers,
//     composeWithDevTools(applyMiddleware(sagaMiddleware))
//   );
//   store.sagaTask = sagaMiddleware.run(rootSaga);

//   return store;
// };
export type AppStore = ReturnType<typeof makeStore>;

export const storeWrapper = createWrapper(makeStore, { debug: true });
