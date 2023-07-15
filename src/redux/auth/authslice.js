import { createSlice } from '@reduxjs/toolkit';
import opAuth from './opAuth';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isChecking: false,
  error: null,
};

const handlePending = state => {
  console.log('pending auth slice')
  state.isChecking = true;
};
const handleRejected = (state, action) => {
  state.isChecking = false;
  state.error = action.payload;
};

const handleFulfiledPartly = state => {
  console.log('fullfiled auth slice');
  state.isChecking = false;
  state.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(opAuth.register.pending, handlePending)
      .addCase(opAuth.register.fulfilled, (state, action) => {
        handleFulfiledPartly(state);
        console.log(action)
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(opAuth.register.rejected, handleRejected)
      .addCase(opAuth.logIn.pending, handlePending)
      .addCase(opAuth.logIn.fulfilled, (state, action) => {
        handleFulfiledPartly(state);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(opAuth.logIn.rejected, handleRejected),
});

export const authReducer = authSlice.reducer;
