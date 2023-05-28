import { createSlice } from '@reduxjs/toolkit';
import { registerUser, userLogin, userLogout, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  registrationError: false,
  loginError: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearLoginError: (state, action) => {
      state.loginError = action.payload;
    },
  },
  extraReducers: {
    [registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.registrationError = false;
    },
    [registerUser.rejected](state) {
      state.registrationError = true;
    },
    [userLogin.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.loginError = false;
    },
    [userLogin.rejected](state) {
      state.loginError = true;
    },
    [userLogout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.isLoggedIn = false;
      state.token = null;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.isRefreshing = false;
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { clearLoginError } = authSlice.actions;
