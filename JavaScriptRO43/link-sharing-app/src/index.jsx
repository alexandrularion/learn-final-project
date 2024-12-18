import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import {
  AuthLoginPage,
  AuthRegisterPage,
  LinksPage,
  PreviewPage,
  ProfilePage,
} from "./pages";
import { ToastContainer } from "react-toastify";
import { AuthRoute, ProtectedRoute } from "./common";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <LinksPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/preview/:userId",
    Component: PreviewPage,
  },
  {
    path: "/profile/:userId",
    element: (
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/auth",
    children: [
      {
        path: "/auth/login",
        element: (
          <AuthRoute>
            <AuthLoginPage />
          </AuthRoute>
        ),
      },
      {
        path: "/auth/register",
        element: (
          <AuthRoute>
            <AuthRegisterPage />
          </AuthRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="bottom-right" />
  </StrictMode>
);
