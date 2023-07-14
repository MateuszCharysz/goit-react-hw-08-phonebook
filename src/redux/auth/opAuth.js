import { createAsyncThunk } from '@reduxjs/toolkit';
import apiv2, { getPromiseData } from '../../js/apiv2';

const register = createAsyncThunk('users/signup', async (regCred, thunkAPI) => {
  try {
    const response = await getPromiseData(apiv2.contApiUserCreate(regCred));
    return response;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const logIn = createAsyncThunk('users/login', async (logCred, thunkAPI) => {
  try {
    const response = await getPromiseData(apiv2.contApiUserLogin(logCred));
    return response;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const logOut = createAsyncThunk('users/logout', async (_, thunkAPI) => {
  try {
    const response = await getPromiseData(apiv2.contApiUserLogout());
    return response;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const opAuth = { register, logIn, logOut };

export default opAuth;
