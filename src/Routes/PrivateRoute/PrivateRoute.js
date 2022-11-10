import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation;

  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
