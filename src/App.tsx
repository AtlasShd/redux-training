import React from 'react';
import './App.css';
import { useTypedDispatch, useTypedSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';

function App() {
  const { increment } = userSlice.actions;
  const dispatch = useTypedDispatch();

  const { count } = useTypedSelector((state) => state.userReducer);
  return (
    <div className="App">
      {count}
      <button onClick={() => dispatch(increment(1))}>Increment</button>
    </div>
  );
}

export default App;
