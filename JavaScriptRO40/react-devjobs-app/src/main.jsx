import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TemplatePage from "./pages/template-page/template-page";

// Components -> Pages -> main.jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <TemplatePage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
