import { configureStore } from '@reduxjs/toolkit';
import { postAPI } from '../services/PostServices';
import reducer from './reducers/reducer';

const setupStore = () => configureStore({
  reducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(postAPI.middleware);
  },
});

type TypedState = ReturnType<typeof reducer>;
type TypedStore = ReturnType<typeof setupStore>;
type TypedDispatch = TypedStore['dispatch'];

export default setupStore;

export type {
  TypedState,
  TypedStore,
  TypedDispatch,
};
