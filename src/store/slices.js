/*
  Abstract:
    This file contains:
      A persistent slice that contains values that are saved across sessions, such as the preferred theme.
      A volatile slice that contains values that are reset on each session, such as unimportant preferences.

  Exports:
    This file exports the actions and the reducers for each slice, using the createSlice function from the Redux Toolkit library.

  Comments:
    @rtlsalazar
      2023-11-10 - recommended resources:
        - createslice: [
            https://redux-toolkit.js.org/api/createslice/,
            https://colinchjs.github.io/2023-09-29/07-38-20-308844-working-with-redux-toolkit-slices/
          ]

*/
import { createSlice } from '@reduxjs/toolkit';

/*
*  A persistent slice that contains values that are saved across sessions, such as the preferred theme.
*  these are synchronized with the "Local Storage"
*/
const persistentSlice = createSlice({
  name: 'persistent',
  initialState: {
    prefered_theme: 'light'
  },

  reducers: {
    // available actions on the persistent values
    getPersistentValues(state, action) {
      return { ...state, ...action.payload };
    },
    setPersistentValues(state, action) {
      return { ...state, ...action.payload };
    }
  }
});


/*
*  A volatile slice that contains values that are reset on each session, such as unimportant preferences
*  these are NOT synchronized with the "Local Storage". thats why they are volatile
*/
const volatileSlice = createSlice({
  name: 'volatile',
  initialState: {},

  reducers: {
    // available actions on the volatile values
    getVolatileValues(state, action) {
      return { ...state, ...action.payload };
    },
    setVolatileValues(state, action) {
      return { ...state, ...action.payload };
    }
  }
});

/*
  Export the actions and the reducers from each slice
*/
export const { getPersistentValues, setPersistentValues } = persistentSlice.actions;
export const { getVolatileValues, setVolatileValues } = volatileSlice.actions;
export const persistentReducer = persistentSlice.reducer;
export const volatileReducer = volatileSlice.reducer;
