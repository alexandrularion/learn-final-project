import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Template from "./components/template/template";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components -> Pages -> main.jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
