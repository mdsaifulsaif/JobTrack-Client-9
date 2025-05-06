import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import CompanyDetailsPage from "../Pages/CompanyDetailsPage";
import Root from "../Pages/Root";
import UserProfile from "../Pages/UserProfile";

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
    ],
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
    Component: UserProfile,
  },
]);
