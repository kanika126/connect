import React, { useState } from "react";
import { Route, Navigate } from "react-router-dom";

const AdminRoute = ({ element, ...props }) => {
  const [user, setUser] = useState(localStorage.getItem("token"))
  console.log(user)

  const isAdmin = user && user.role === "admin";

  return isAdmin ? (
    <Route {...props} element={element} />
  ) : (
    <Navigate to="/login" /> // Redirect to the login page if the user is not an admin
  );
};

export default AdminRoute;
