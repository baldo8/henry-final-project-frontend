/*
  Abstract:
    This code creates a Redux store using Redux Toolkit and imports the root reducer from './rootReducer'.

  Comments:
		@rtlsalazar:
			2023-11-10 - recomended resources:
				- redux-toolkit: [
						https://redux-toolkit.js.org/,
						https://redux.js.org/introduction/why-rtk-is-redux-today
					]
			  - redux-persist: [
			  		https://github.com/rt2zz/redux-persist,
					  https://stackoverflow.com/questions/70468548/how-do-i-persist-my-redux-state-with-local-storage
					]
*/
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer
});

export default store;
