import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "stores/stores/authStore";

interface ProtectedRouteProps {
  children: React.ReactElement;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isLoggedIn } = useAuthStore();

  // If the user is not logged in, redirect to /login
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise, render the protected content
  return children;
};
