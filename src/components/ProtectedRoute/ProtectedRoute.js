import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const ProtectedRoute = ({component: Component, ...props}) => {
  return (
    <Routes>
      <Route>
      {() => 
        props.loggedIn === true ? (
          <Component {...props} />
        ) : (
        <Navigate to="/sign-in" />
        )
      }
      </Route>

    </Routes>
  )
}

export default ProtectedRoute;