import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers/reducer';

const setupStore = () => configureStore({
  reducer,
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
