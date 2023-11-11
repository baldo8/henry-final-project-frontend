/*
  Abstract:
    This code defines the root reducer that combines the slice reducers from './slices'.

  Comments:
    ...
*/

import { combineReducers } from '@reduxjs/toolkit';
import { persistentReducer, volatileReducer } from './slices';

const rootReducer = combineReducers({
  persistent: persistentReducer,
  volatile: volatileReducer
});

export default rootReducer;