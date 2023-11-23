import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute"

/*--------------------------------------------------------------------------------*/
/* componentes de orden superior (HOC), funcionan como frame layout               */
/*--------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------*/
/* componentes de orden inferior                                                  */
/*--------------------------------------------------------------------------------*/
const LandingPage = React.lazy(() => import("@views/LandingPage"));
const LoginPage = React.lazy(() => import("@views/LoginPage"));
const SignupPage = React.lazy(() => import("@views/SignupPage"));

/* vistas del dashboard de los pacientes */
const PatientHome = React.lazy(() => import("@views/DashboardPatient/PatientHome"));
const PatientNewAppointment = React.lazy(() => import("@views/DashboardPatient/PatientNewAppointment"));
const PatientDetailDoctor = React.lazy(() => import("@views/DashboardPatient/DetailDoctor"));
const PatientAppointments = React.lazy(() => import("@views/DashboardPatient/PatientAppointments"));
const PatientPayments = React.lazy(() => import("@views/DashboardPatient/PatientPayments"));
const NewDoctor = React.lazy(() => import("@views/DashboardMasters/MasterDoctors/PostDoctor"));

/* vistas del dashboard del los doctores */
const DoctorHome = React.lazy(() => import("@views/DashboardDoctors/DoctorHome"));
const DoctorAppointments = React.lazy(() => import("@views/DashboardDoctors/DoctorAppointments"));
const DoctorPayments = React.lazy(() => import("@views/DashboardDoctors/DoctorPayments"));

/* vistas del dashboard los administradores */
const MasterHome = React.lazy(() => import("@views/DashboardMasters/MasterHome"));
const MasterUsers = React.lazy(() => import("@views/DashboardMasters/MasterUsers"));
const MasterDoctors = React.lazy(() => import("@views/DashboardMasters/MasterDoctors"));
const MasterAppointments = React.lazy(() => import("@views/DashboardMasters/MasterAppointments"));
const MasterPayments = React.lazy(() => import("@views/DashboardMasters/MasterPayments"));

/*--------------------------------------------------------------------------------*/
/* definicion de las rutas                                                        */
/*--------------------------------------------------------------------------------*/


const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
  /* Rutas restringidas */
  {
    
    path: "/patient",
    children: [
      { path: "", element: <ProtectedRoute element={<PatientHome />} /> },
      {
        path: "new_appointment",
        element: <ProtectedRoute element={<PatientNewAppointment />} />,
      },
      {
        path: "appointments",
        element: <ProtectedRoute element={<PatientAppointments />} />,
      },
      {
        path: "payments",
        element: <ProtectedRoute element={<PatientPayments />} />,
      },

    ],
  },
  {
    /* Rutas restringidas
   , */
    path: "/doctor",
    children: [
      { path: "", element: <ProtectedRoute element={<DoctorHome />} /> },
      {
        path: "appointments",
        element: <ProtectedRoute element={<DoctorAppointments />} />,
      },
      {
        path: "payments",
        element: <ProtectedRoute element={<DoctorPayments />} />,
      },
    ],
  },
  {
    /* Rutas restringidas */
    path: "/master",


    children: [
      { path: "", element: <ProtectedRoute element={<MasterHome />} /> },
      { path: "users", element: <ProtectedRoute element={<MasterUsers />} /> },
      {
        path: "doctors",
        element: <ProtectedRoute element={<MasterDoctors />} />,
      },
      {
        path: "appointments",
        element: <ProtectedRoute element={<MasterAppointments />} />,
      },
      {
        path: "payments",
        element: <ProtectedRoute element={<MasterPayments />} />,
      },
    ],
  },
]);

export default router;