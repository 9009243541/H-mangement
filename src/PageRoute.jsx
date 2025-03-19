import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginWrapper from "./pages/doctor/login/LoginWrapper";
import Layout from "./component/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import DoctorListWrapper from "./pages/doctor/list/DoctorListWrapper";
import PatientListingWrapper from "./pages/patient/list/PatientListingWrapper";
import AppointmentListWrapper from "./pages/appointment/list/AppointmentListWrapper";
import AppointmentWrapper from "./pages/appointment/add/AppointmentWrapper";

const router = createBrowserRouter([
  { path: "/", element: <LoginWrapper /> },

  {
    path: "/layout",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "doctors",
        element: <DoctorListWrapper />,
      },
      {
        path: "patients",
        element: <PatientListingWrapper />,
      },
      {
        path: "appointments",
        element: <AppointmentListWrapper />,
      },
    ],
  },
  {
    path: "/book-appointments",
    element: <AppointmentWrapper />,
  },
]);

const Pagroute = () => {
  return <RouterProvider router={router} />;
};

export default Pagroute;
