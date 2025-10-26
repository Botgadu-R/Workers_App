import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import HomeLayout from "../layouts/HomeLayout.jsx";
import DailyReport from "./DailyReport.jsx";
import DailyReportService from "../services/DailyReportService.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> }, // default http://localhost:5173/ route
      {
        path: "/DailyReport",
        element: (
          <DailyReportService>
            <DailyReport />
          </DailyReportService>
        ),
      }, // http://localhost:5173/DailyReport route
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
