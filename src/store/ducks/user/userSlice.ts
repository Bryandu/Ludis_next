import { createAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { UserState } from './userTypes';

const hydrate = createAction<UserState>(HYDRATE);

export const userSlice = createSlice({
  name: 'userState',
  initialState: {
    isOn: false,
    isActive: false,
    loading: false,
    user: {
      token: null,
      id: null,
      name: null,
      photoProfile: null,
      email: null,
      password: null,
      posts: null
    }
  },
  reducers: {
    loading(state, action) {
      state.loading = action.payload;
    },
    setToken(state, action) {
      state.user.token = action.payload.token;
    },
    loginSuccesses(state, action) {
      state.isOn = true;
      state.user = action.payload;
    },
    singUpSuccesses(state) {
      state.isActive = true;
    },
    loginFail(state) {
      state.isOn = false;
    },
    singUpFail(state) {
      state.isActive = false;
    }
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      console.log('HYDRAETE', state, action.payload);
    });
  }
});

export const { loginFail, loginSuccesses, singUpFail, singUpSuccesses, setToken, loading } =
  userSlice.actions;
export default userSlice;
