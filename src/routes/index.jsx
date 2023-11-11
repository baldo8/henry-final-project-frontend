import React from "react";
import { createBrowserRouter } from "react-router-dom";

/*--------------------------------------------------------------------------------*/
/* componentes de orden superior (HOC), funcionan como frame layout               */
/*--------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------*/
/* componentes de orden inferior                                                  */
/*--------------------------------------------------------------------------------*/
const Landing = React.lazy(() => import("@views/Landing"));
const Home = React.lazy(() => import("@views/Home"));
const Login = React.lazy(() => import("@views/Login"));
const Signup = React.lazy(() => import("@views/Signup"));

/* vistas del dashboard */
const DoctorsDashboard = React.lazy(() => import("@views/Dashboard/Doctors"));
const MastersDashboard = React.lazy(() => import("@views/Dashboard/Masters"));
const PatientsDashboard = React.lazy(() => import("@views/Dashboard/Patients"));

/*--------------------------------------------------------------------------------*/
/* definicion de las rutas                                                        */
/*--------------------------------------------------------------------------------*/
const routes = [
  { path: "/", element: <Landing /> },
  { path: "/home", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/doctors",  element: <DoctorsDashboard />,}, // esto no ira asi, se definira luego de resolver la logica del login y el manejo de sesiones
  { path: "/masters",  element: <MastersDashboard />,}, // esto no ira asi, se definira luego de resolver la logica del login y el manejo de sesiones
  { path: "/patients",  element: <PatientsDashboard />,}, // esto no ira asi, se definira luego de resolver la logica del login y el manejo de sesiones
];

const router = createBrowserRouter(routes);
export default router;