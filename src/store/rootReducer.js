/*
  Abstract:
    ...

  Comments:
    ...
*/
import { combineReducers } from '@reduxjs/toolkit';
import { persistentReducer, volatileReducer } from './slices';

// Combine the slice reducers into the root reducer
const rootReducer = combineReducers({
  persistent: persistentReducer,
  volatile: volatileReducer
});

export default rootReducer;