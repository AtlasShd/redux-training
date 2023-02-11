import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';
import { fetchUsers2 } from './ActionCreators';

interface IUserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: IUserState = {
  users: [],
  isLoading: false,
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true;
    },
    usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
      state.isLoading = false;
      state.error = '';
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: {
    [fetchUsers2.pending.type](state) {
      state.isLoading = true;
    },
    [fetchUsers2.fulfilled.type](state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
      state.isLoading = false;
      state.error = '';
    },
    [fetchUsers2.rejected.type](state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export { userSlice };
export default userSlice.reducer;
