import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../pages/ErrorPage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
//   {
//     path: "/add-visa",
//     element: (
//       <PrivateRoute>
        
//       </PrivateRoute>
//     ),
//   },
//   {
//     path: "/my-added-visas",
//     element: (
//       <PrivateRoute>
        
//       </PrivateRoute>
//     ),
//   },
//   {
//     path: "/my-visa-applications",
//     element: (
//       <PrivateRoute>
        
//       </PrivateRoute>
//     ),
//   },
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
