import { all, call, put, takeLatest } from 'redux-saga/effects';

import { GET, POST } from '../service/axios';
import { loadingAction, loadingEndAction } from './ducks/genericActions';
import {
  userLoginFail,
  userLoginSuccsses,
  userSingupFail,
  userSingupSeccsses
} from './ducks/user/userActions';
import { UserActionLoginSuccsses, UserActions, UserActionSingUp } from './ducks/user/userTypes';

function* userSingupSaga(action: UserActionSingUp) {
  try {
    const { status } = yield call(POST, 'user', action.payload);
    status === 201 ? yield put(userSingupSeccsses()) : yield put(userSingupFail());
  } catch (error) {
    yield put(userSingupFail());
    console.log(error);
  }
}

function* userLoginSaga(action: UserActionLoginSuccsses) {
  yield put(loadingAction());
  try {
    const response = yield call(
      GET,
      `user/?email=${action.payload.email}&password=${action.payload.password}`
    );
    response.data[0] == undefined
      ? yield put(userLoginFail())
      : yield put(userLoginSuccsses(response.data[0]));
    //localStorage.setItem('token', String(Math.random()));
    yield put(loadingEndAction());
  } catch (error) {
    yield put(userLoginFail());
    yield put(loadingEndAction());
    console.log(error);
  }
}

function* rootSaga() {
  yield all([
    takeLatest(UserActions.USER_LOGIN, userLoginSaga),
    takeLatest(UserActions.USER_SINGUP, userSingupSaga)
  ]);
}

export default rootSaga;
