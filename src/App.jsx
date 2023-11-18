//App.jsx
import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import LoadingPage from "@views/util/LoadingPage";

// Router object that has been created using createBrowserRouter from react-router-dom
import router from "@/routes";

// Store object that has been created using the createStore function from the Redux library
import store from '@/store';

// Global styles of the application
import "@/App.scss";

// Root component of the application
function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Provider store={store}>
        <Suspense fallback={<LoadingPage/>}>
          <RouterProvider router={router} />
        </Suspense>
      </Provider>
     </LocalizationProvider>
  );
}


// Export the App component as the default value of the module
export default App;
