import React, { useEffect } from 'react';
import './App.css';
import PostContainer from './components/PostContainer';
// import { useTypedDispatch, useTypedSelector } from './hooks/redux';
// import { fetchUsers2 } from './store/reducers/ActionCreators';
// import { userSlice } from './store/reducers/UserSlice';

function App() {
  // const dispatch = useTypedDispatch();
  // const { users, isLoading, error } = useTypedSelector((state) => state.userReducer);

  // useEffect(() => {
  //   dispatch(fetchUsers2());
  // }, []);

  return (
    <div className="App">
      {/* {isLoading && <h1>Loading...</h1>}
      {error && <h1>Errors: {error}</h1>}
      {JSON.stringify(users, null, 2)} */}
      <PostContainer />
    </div>
  );
}

export default App;
