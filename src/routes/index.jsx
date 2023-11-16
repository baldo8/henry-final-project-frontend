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
const PatientHome = React.lazy(() => import("@views/DashboardPatient/Doctors"));
const PatientNewAppointment = React.lazy(() => import("@views/DashboardPatient/PatientNewAppointment"));
const PatientAppointments = React.lazy(() => import("@views/DashboardPatient/PatientAppointments"));
const PatientPayments = React.lazy(() => import("@views/DashboardPatient/PatientPayments"));

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
  {
    /* Rutas restringidas */
    path: "/patient/*",
    element: <ProtectedRoute />,
    children: [
      { path: "", element: <PatientHome /> },
      { path: "new_appointment", element: <PatientNewAppointment /> },
      { path: "appointments", element: <PatientAppointments /> },
      { path: "payments", element: <PatientPayments /> },
    ],
  },
  {
    /* Rutas restringidas */
    path: "/doctor",
    element: <ProtectedRoute />,
    children: [
      { path: "", element: <DoctorHome /> },
      { path: "appointments", element: <DoctorAppointments /> },
      { path: "payments", element: <DoctorPayments /> },
    ],
  },
  {
    /* Rutas restringidas */
    path: "/master",
    element: <ProtectedRoute />,
    children: [
      { path: "", element: <MasterHome /> },
      { path: "users", element: <MasterUsers /> },
      { path: "doctors", element: <MasterDoctors /> },
      { path: "appointments", element: <MasterAppointments /> },
      { path: "payments", element: <MasterPayments /> },
    ],
  },
]);

export default router;