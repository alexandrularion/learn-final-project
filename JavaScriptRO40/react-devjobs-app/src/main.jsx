import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JobsPage from "./pages/jobs-page/jobs-page";
import JobPage from "./pages/job-page/job-page";

// Components -> Pages -> main.jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <JobsPage />,
  },
  {
    path: "/jobs/:jobId",
    element: <JobPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
