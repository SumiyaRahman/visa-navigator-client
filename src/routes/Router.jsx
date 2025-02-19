import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../pages/ErrorPage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddVisa from "../pages/AddVisa";
import PrivateRoute from "./PrivateRoute";
import AllVisas from "../pages/AllVisas";
import VisaTypesSection from "../components/VisaTypesSection";
import VisaDetails from "../pages/VisaDetails";
import MyAddedVisa from "../pages/MyAddedVisa";
import MyVisaApplications from "../pages/MyVisaApplications";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/addVisa",
    element: (
      <PrivateRoute>
        <AddVisa></AddVisa>
      </PrivateRoute>
    ),
  },
  {
    path: "/allVisas",
    element: (
      <PrivateRoute>
        <AllVisas></AllVisas>
      </PrivateRoute>
    ),
  },
  {
    path: "/visa-details/:id",
    element: (
      <PrivateRoute>
        <VisaDetails></VisaDetails>
      </PrivateRoute>
    ),
  },
  {
    path: "/myAddedVisas", // Add this route for the user's added visas
    element: (
      <PrivateRoute>
        <MyAddedVisa></MyAddedVisa>
      </PrivateRoute>
    ),
  },
  {
    path: "/myVisaApplications", // Add this route for the user's added visas
    element: (
      <PrivateRoute>
        <MyVisaApplications></MyVisaApplications>
      </PrivateRoute>
    ),
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/visaTypes",
    element: <VisaTypesSection></VisaTypesSection>,
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default Router;
