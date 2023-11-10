import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

// Router object that has been created using createBrowserRouter from react-router-dom
import router from "@/routes";

// Store object that has been created using the createStore function from the Redux library
import store from '@/store';

// Global styles of the application
import "@/App.scss";

// Root component of the application
function App() {
  return (
    // Render the Provider component and pass it the store object as a prop
    // <Suspense> allows you to display an alternative content while the component is loading
    <Provider store={store}>
      <Suspense fallback={<div></div>}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  );
}


// Export the App component as the default value of the module
export default App;
