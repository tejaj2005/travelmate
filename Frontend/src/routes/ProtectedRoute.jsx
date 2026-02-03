import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, isAuthenticated } = useAuth();

  if (user === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-sm opacity-60 animate-pulse">
          Loading your journey...
        </span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default ProtectedRoute;
