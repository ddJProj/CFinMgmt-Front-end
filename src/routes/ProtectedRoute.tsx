// src/routes/ProtectedRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { usePermissions } from "../hooks/usePermissions";

interface ProtectedRouteProps {
  element: React.ReactElement;
  isProtected: boolean;
  roles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, isProtected, roles }) => {
  const { hasRole, isLoading } = usePermissions();

  if (isLoading) return <p>Loading...</p>;

  if (isProtected && roles && !roles.some((role) => hasRole(role))) {
    return <Navigate to="/unauthorized" />;
  }

  return element;
};

export default ProtectedRoute;

