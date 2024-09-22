import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  console.log(location.pathname, isAuthenticated);
  console.log("user.role: ", user?.role);

  // if (location.pathname === "/") {
  //   if (!isAuthenticated) {
  //     return <Navigate to="/auth/login" />;
  //   } else {
  //     if (user?.role === "admin") {
  //       return <Navigate to="/admin/dashboard" />;
  //     } else {
  //       return <Navigate to="/shop/home" />;
  //     }
  //   }
  // }

  // if (
  //   !isAuthenticated &&
  //   !(
  //     location.pathname.includes("/login") ||
  //     location.pathname.includes("/register")
  //   )
  // ) {
  //   return <Navigate to="/auth/login" />;
  // }

  // if (
  //   isAuthenticated &&
  //   (location.pathname.includes("/login") ||
  //     location.pathname.includes("/register"))
  // ) {
  //   if (user?.role === "admin") {
  //     return <Navigate to="/admin/dashboard" />;
  //   } else {
  //     return <Navigate to="/shop/home" />;
  //   }
  // }

  // if (
  //   isAuthenticated &&
  //   user?.role !== "admin" &&
  //   location.pathname.includes("admin")
  // ) {
  //   return <Navigate to="/unauth-page" />;
  // }

  // if (
  //   isAuthenticated &&
  //   user?.role === "admin" &&
  //   location.pathname.includes("shop")
  // ) {
  //   return <Navigate to="/admin/dashboard" />;
  // }

  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }

  if (
    isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }

  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("shop")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
}
