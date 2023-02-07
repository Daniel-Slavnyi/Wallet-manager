import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from './auth-thunk';

const initialState = {
  user: { userName: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

const authslice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      //   register
      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        console.log(action);
      })
      //   login
      .addCase(login.pending, (state, action) => {
        console.log(action);
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log(action);
      })
      .addCase(login.rejected, (state, action) => {
        console.log(action);
      })
      //   logout
      .addCase(logout.pending, (state, action) => {
        console.log(action);
      })
      .addCase(logout.fulfilled, (state, action) => {
        console.log(action);
      })
      .addCase(logout.rejected, (state, action) => {
        console.log(action);
      }),
});

const { reducer } = authslice;

export default reducer;
