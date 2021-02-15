import { all, call, put, takeLatest } from 'redux-saga/effects';

import { GET, POST } from '../service/axios';
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
  try {
    const response = yield call(
      GET,
      `user/?email=${action.payload.email}&password=${action.payload.password}`
    );
    response.data[0] == undefined
      ? yield put(userLoginFail())
      : yield put(userLoginSuccsses(response.data[0]));
  } catch (error) {
    yield put(userLoginFail());
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
