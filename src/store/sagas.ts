import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { GET, POST } from '../service/axios';
import { loadingAction, loadingEndAction } from './ducks/genericActions';
import {
  userGetPostsSuccesses,
  userLoginFail,
  userLoginSuccesses,
  userSingupFail,
  userSingupSuccesses
} from './ducks/user/userActions';
import {
  Posts,
  UserActionLoginSuccesses as UserActionLoginSuccesses,
  UserActions,
  UserActionSingUp
} from './ducks/user/userTypes';

function* userSingupSaga(action: UserActionSingUp) {
  try {
    const { status }: AxiosResponse<Posts[]> = yield call(POST, 'users/', action.payload);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return yield status === 201 ? put(userSingupSuccesses()) : put(userSingupFail());
  } catch (error) {
    yield put(userSingupFail());
    console.log(error);
  }
}

function* userLoginSaga(action: UserActionLoginSuccesses) {
  try {
    const { password, email } = action.payload;
    yield put(loadingAction());
    const response: AxiosResponse<{ token: string }> = yield call(POST, `users/authenticate`, {
      email,
      password
    });
    response.data.token == undefined
      ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        yield put(userLoginFail())
      : // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        yield put(userLoginSuccesses(response.data.token));
    localStorage.setItem('token', response.data.token);
    yield put(loadingEndAction());
  } catch (error) {
    yield put(userLoginFail());
    yield put(loadingEndAction());
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
    takeLatest(UserActions.USER_LOGIN, userLoginSaga),
    takeLatest(UserActions.USER_SINGUP, userSingupSaga),
    takeLatest(UserActions.USER_GETINITIALPOSTS, userInitialPostsSaga)
  ]);
}

export default rootSaga;
