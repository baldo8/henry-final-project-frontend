import React from "react";
import { createBrowserRouter } from "react-router-dom";

/*--------------------------------------------------------------------------------*/
/* componentes de orden superior (HOC), funciona como frame layout                */
/*--------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------*/
/* componentes de orden inferior                                                  */
/*--------------------------------------------------------------------------------*/
const Home = React.lazy(() => import("@views/Home"));
const About = React.lazy(() => import("@views/About"));

/*--------------------------------------------------------------------------------*/
/* definicion de las rutas                                                        */
/*--------------------------------------------------------------------------------*/
const routes = [
  { path: "/",       element: <Home />,},
  { path: "/about",  element: <About />,},
];

const router = createBrowserRouter(routes);
export default router;