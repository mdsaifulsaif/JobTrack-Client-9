import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import CompanyDetailsPage from "../Pages/CompanyDetailsPage";
import Root from "../Pages/Root";
import UserProfile from "../Pages/UserProfile";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import NotFoundPage from "../Pages/NotFoundPage";
import UpdateProfile from "../Pages/UpdateProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch("/jobs.json"),
    Component: Root,
    children: [
      {
        path: "/",
        loader: () => fetch("/jobs.json"),
        Component: Home,
      },
      {
        path: "company/:id",
        loader: () => fetch("/jobs.json"),
        Component: CompanyDetailsPage,
      },
      {
        path: "auth/register",
        Component: Register,
      },
      {
        path: "auth/login",
        Component: Login,
      },
      {
        path: "myprofile",
        element: (
          <PrivetRoute>
            <UserProfile></UserProfile>
          </PrivetRoute>
        ),
      },
      {
        path: "update-user",
        element: (
          <PrivetRoute>
            <UpdateProfile></UpdateProfile>
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
  // {
  //   path: "auth/register",
  //   Component: Register,
  // },
  // {
  //   path: "auth/login",
  //   Component: Login,
  // },
  // {
  //   path: "myprofile",
  //   Component: UserProfile,
  // },
]);
