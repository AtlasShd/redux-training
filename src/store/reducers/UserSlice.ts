import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';

interface IUserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: IUserState = {
  users: [],
  isLoading: false,
  error: '',
  count: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
});
export { userSlice };
export default userSlice.reducer;
