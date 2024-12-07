import { ComponentType } from "react";
import { createHashRouter, Navigate } from "react-router-dom";
import loadable from "../shared/utils/loadable";
import NotFound from "../views/NotFound";

const Dashboard = withProtectedRoute(
  loadable(() => import("../views/Dashboard"))
);
const Login = loadable(() => import("../views/auth/Login"));
const Register = loadable(() => import("../views/auth/Register"));
const Profile = loadable(() => import("../views/profile/Profile"));

export const routes = createHashRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export function withProtectedRoute(WrappedComponent: ComponentType) {
  const checkAuth = () => {
    // handle logic check auth
    return true;
  };
  return () => {
    if (!checkAuth()) {
      return <Navigate to="/login" />;
    }
    return <WrappedComponent />;
  };
}
