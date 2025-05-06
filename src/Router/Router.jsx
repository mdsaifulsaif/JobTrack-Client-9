import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import CompanyDetailsPage from "../Pages/CompanyDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch("/jobs.json"),
    Component: Home,
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
    path: "company/:id",
    loader: () => fetch("/jobs.json"),
    Component: CompanyDetailsPage,
  },
]);
