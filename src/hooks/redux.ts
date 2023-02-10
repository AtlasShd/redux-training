import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';

import { TypedDispatch, TypedState } from '../store';

const useTypedDispatch = () => useDispatch<TypedDispatch>();
const useTypedSelector: TypedUseSelectorHook<TypedState> = useSelector;

export {
  useTypedDispatch,
  useTypedSelector,
};
