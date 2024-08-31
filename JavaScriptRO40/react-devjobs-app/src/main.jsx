import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JobsPage from "./pages/jobs-page/jobs-page";
import JobPage from "./pages/job-page/job-page";
import jobService from "./server/job-service";

// Components -> Pages -> main.jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <JobsPage />,
    loader: async () => {
      const jobs = await jobService.readByFilters();
      // jobs = Array<Job>
      return jobs || null;
    },
  },
  {
    path: "/jobs/:jobId",
    element: <JobPage />,
    loader: async ({ params }) => {
      const job = await jobService.readById(params.jobId);
      return job || null;
    },
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
