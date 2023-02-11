import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

// import { TypedDispatch } from '..';
import { IUser } from '../../models/IUser';
// import { userSlice } from './UserSlice';

// const fetchUsers = () => async (dispatch:TypedDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching());
//     const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//     dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//   } catch (e) {
//     console.log(e);
//     dispatch(userSlice.actions.usersFetchingError(axios.isAxiosError(e) ? e.message : e as string));
//   }
// };

const fetchUsers2 = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      return response.data;
    } catch (e) {
      console.log(e);
      // return axios.isAxiosError(e) ? e.message : e as string;
      return thunkAPI.rejectWithValue(axios.isAxiosError(e) ? e.message : e as string);
    }
  },
);

export {
  // fetchUsers,
  fetchUsers2,
};
