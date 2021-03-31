import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { GET, POST } from '../service/axios';
import { loadingAction, loadingEndAction } from './ducks/genericActions';
import {
  userGetPostsSucsses,
  userLoginFail,
  userLoginSuccsses,
  userSingupFail,
  userSingupSeccsses
} from './ducks/user/userActions';
import {
  Posts,
  UserActionLoginSuccsses,
  UserActions,
  UserActionSingUp,
  UserData
} from './ducks/user/userTypes';

function* userSingupSaga(action: UserActionSingUp) {
  try {
    const { status }: AxiosResponse<Posts[]> = yield call(POST, 'user', action.payload);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return yield status === 201 ? put(userSingupSeccsses()) : put(userSingupFail());
  } catch (error) {
    yield put(userSingupFail());
    console.log(error);
  }
}

function* userLoginSaga(action: UserActionLoginSuccsses) {
  try {
    yield put(loadingAction());
    const response: AxiosResponse<UserData[]> = yield call(
      GET,
      `user/?email=${action.payload.email}&password=${action.payload.password}`
    );
    response.data[0] == undefined
      ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        yield put(userLoginFail())
      : // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        yield put(userLoginSuccsses(response.data[0]));
    localStorage.setItem('token', String(Math.random()));
    yield put(loadingEndAction());
  } catch (error) {
    yield put(userLoginFail());
    yield put(loadingEndAction());
    console.log(error);
  }
}

function* userInitialPostsSaga() {
  try {
    const response: AxiosResponse<Posts[]> = yield call(
      GET,
      'https://jsonplaceholder.typicode.com/photos?_page=1'
    );
    yield put(userGetPostsSucsses(response.data));
  } catch (error) {
    console.log(error);
  }
}

// function* userGetMorePostsSaga(action: UserActionGetMorePosts) {
//   try {
//     const response = yield call(GET, 'https://jsonplaceholder.typicode.com/photos?_page=1');
//     yield put(userGetPostsSucsses(response.data));
//   } catch (error) {
//     console.log(error);
//   }
// }

function* rootSaga() {
  yield all([
    takeLatest(UserActions.USER_LOGIN, userLoginSaga),
    takeLatest(UserActions.USER_SINGUP, userSingupSaga),
    takeLatest(UserActions.USER_GETINITIALPOSTS, userInitialPostsSaga)
  ]);
}

export default rootSaga;
