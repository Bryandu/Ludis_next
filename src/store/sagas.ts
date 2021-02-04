import { all, call, put, takeLatest } from 'redux-saga/effects';

import { POST } from '../service/axios';
import { userSingupSeccsses } from './ducks/user/userActions';
import { UserActions, UserActionSingUp } from './ducks/user/userTypes';

function* userSingupRequest(action: UserActionSingUp) {
  try {
    const { data } = yield call(POST, 'user', action.payload);
    yield console.log(data);
    yield put(userSingupSeccsses(data));
  } catch (error) {
    yield console.log(error);
  }
}

function* rootSaga() {
  yield all([takeLatest(UserActions.USER_SINGUP, userSingupRequest)]);
}

export default rootSaga;
