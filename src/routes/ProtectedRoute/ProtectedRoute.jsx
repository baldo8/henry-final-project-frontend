/*
  Abstract:
    This code creates a custom component that wraps the <Route /> component of
    React Router and checks the authentication status using Auth0 React SDK.

  Return: 
    A <Route /> component or a <Navigate /> component depending on the authentication status.

  Comments:
    @rtlsalazar:
      2023-11-16:
        Casi todo el componente sta anulado hasta que se pusheen los cambios sobre el procedimiento de login
        El componente esta dejando a los usuarios acceder a cualquier ruta
        
*/

/*
  Nombre del archivo: ProtectedRoute.js
  Autor: @rtlsalazar
  Fecha: 2023-11-16
  Descripción: 
  Dependencias: React Router, Auth0 React SDK, useIsAuthenticated
  Parámetros: element, ...rest
*/



// Import React Router components and hooks
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";

// Import Auth0 React SDK components and hooks
import { useAuth0 } from "@auth0/auth0-react";

// Create a custom hook that checks the authentication status
const useIsAuthenticated = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  return [isAuthenticated, isLoading];
};


const ProtectedRoute = ({ element, ...rest }) => {
  /*
  const [isAuthenticated, isLoading] = useIsAuthenticated();
  const isAuthenticated = true;
  const location = useLocation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Route {...rest} element={isAuthenticated ? (element) : (<Navigate to="/" state={{ from: location }} />)}/>
  );
  */

  return (
    <Outlet></Outlet>
  );
};

export default ProtectedRoute;