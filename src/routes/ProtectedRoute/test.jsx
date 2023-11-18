import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";

// Import Auth0 React SDK components and hooks
import { useAuth0 } from "@auth0/auth0-react";

// Create a custom hook that checks the authentication status
/* const useIsAuthenticated = () => {
  const { isAuthenticated, isLoading } = useAuth0(false);
  return [isAuthenticated, isLoading];
};
 */

const ProtectedRoute = ({ element, ...rest }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const location = useLocation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    <Routes>
      <Route {...rest} element={element} />
    </Routes>
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
};

export default ProtectedRoute;