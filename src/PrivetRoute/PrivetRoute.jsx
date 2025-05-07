import React, { use } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router";
import LoaddingSpinner from "../../../Dragon News/Dragon News/src/Components/LoaddingSpinner/LoaddingSpinner";

function PrivetRoute({ children }) {
  const { user, lodding } = use(AuthContext);

  if (lodding) {
    return <LoaddingSpinner></LoaddingSpinner>;
  }

  if (user && user.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
}

export default PrivetRoute;
