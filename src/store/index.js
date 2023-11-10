/*
  Abstract:
    This code creates a Redux store using Redux Toolkit and imports the root reducer from './rootReducer'.

  Comments:
		@rtlsalazar 2023-11-10:
			recomended resource: redux-toolkit.js.org
*/
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

// You can pass the rootReducer directly to configureStore
const store = configureStore({
  reducer: rootReducer
});

export default store;
