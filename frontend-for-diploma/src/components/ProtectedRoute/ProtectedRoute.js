import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({loggedIn, redirectPath='/signin'}) => {
  if(!loggedIn) {
    return <Navigate to={redirectPath} />
  }
    return <Outlet />;
}

export default ProtectedRoute;
