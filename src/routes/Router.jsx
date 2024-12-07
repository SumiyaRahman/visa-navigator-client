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
import MyVisaApplications from "../pages/MyVisaApplications";
import MyAddedVisas from "../pages/MyAddedVisas";

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
    path: "/myVisaApplications",
    element: (
      <PrivateRoute>
        <MyVisaApplications></MyVisaApplications>
      </PrivateRoute>
    ),
  },
  {
    path: "/myAddedVisas",
    element: (
      <PrivateRoute>
        <MyAddedVisas></MyAddedVisas>
      </PrivateRoute>
    ),
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
        {
            path:"/auth/login",
            element: <Login></Login>
        },
        {
            path:"/auth/register",
            element: <Register></Register>
        }
    ]
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default Router;
