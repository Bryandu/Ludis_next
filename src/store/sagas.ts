import { AxiosResponse } from 'axios';
import { all, call, CallEffect, put, PutEffect, takeLatest, takeLeading } from 'redux-saga/effects';

import { GET, POST } from '../service/axios';
import {
  userGetPostsSuccesses,
  userSingupFail,
  userSingupSuccesses
} from './ducks/user/userActions';
import { loading, loginFail, loginSuccesses } from './ducks/user/userSlice';
import {
  Posts,
  UserActionLoginSuccesses as UserActionLoginSuccesses,
  UserActions,
  UserActionSingUp
} from './ducks/user/userTypes';

function* userSingupSaga(
  action: UserActionSingUp
): Generator<CallEffect | PutEffect, void, AxiosResponse<Posts[]>> {
  try {
    const { status } = yield call(POST, 'users/', action.payload);
    yield status === 201 ? put(userSingupSuccesses()) : put(userSingupFail());
  } catch (error) {
    yield put(userSingupFail());
  }
}

function* userLoginSaga(action: UserActionLoginSuccesses) {
  try {
    const { password, email } = action.payload;
    yield put(loading(true));
    const response: AxiosResponse<{ token: string }> = yield call(POST, `users/login`, {
      email,
      password
    });
    yield response.data.token == undefined ? put(loginFail()) : put(loginSuccesses(response.data));
    yield localStorage.setItem('token', response.data.token);
    yield put(loading(false));
  } catch (error) {
    yield put(loginFail());
    yield put(loading(false));
  }
}

function* userInitialPostsSaga() {
  try {
    const response: AxiosResponse<Posts[]> = yield call(
      GET,
      'https://jsonplaceholder.typicode.com/photos?_page=1'
    );
    yield put(userGetPostsSuccesses(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* rootSaga() {
  yield all([
    takeLeading(UserActions.USER_LOGIN, userLoginSaga),
    takeLatest(UserActions.USER_SINGUP, userSingupSaga),
    takeLatest(UserActions.USER_GETINITIALPOSTS, userInitialPostsSaga)
  ]);
}

export default rootSaga;
