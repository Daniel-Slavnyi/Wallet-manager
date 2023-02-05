import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerUser, logInUser, logOutUser } from 'api/apiAuth';
// import { backend } from 'api/apiAuth';

export const register = createAsyncThunk(
  'auth/register',
  async (objData, thunkAPI) => {
    try {
      const res = await registerUser(objData);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (objData, thunkAPI) => {
    try {
      const res = await logInUser(objData);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await logOutUser();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
