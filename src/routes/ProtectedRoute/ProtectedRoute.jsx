// Import React Router components and hooks
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";

// Import Auth0 React SDK components and hooks
import { useAuth0 } from "@auth0/auth0-react";

// Create a custom hook that checks the authentication status
const useIsAuthenticated = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  return [isAuthenticated, isLoading];
};

// Create a custom component that wraps the <Route /> component
export default ProtectedRoute = ({ element, ...rest }) => {
  const [isAuthenticated, isLoading] = useIsAuthenticated();
  const location = useLocation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? (
          element
        ) : (
          <Navigate to="/" state={{ from: location }} />
        )
      }
    />
  );
};