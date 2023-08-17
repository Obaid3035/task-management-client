import React from "react";
import { Navigate } from "react-router-dom";

const AuthRedirectGuard: React.FC<any> = ({ isAuthenticated, children }) => {

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  return children;
};

export default AuthRedirectGuard;
