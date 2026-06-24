import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/homepage/HomePage";
import Apps from "../pages/apps/Apps";
import InstalledApps from "../pages/installApps/InstallApps";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AppDetails from "../pages/appDetails/AppDetails";
import Dashboard from "../pages/dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "apps",
        Component: Apps,
      },

      {
        path: "/apps/:id",
        Component: AppDetails,
      },
      {
        path: "installedApps",
        Component: InstalledApps,
      },

        {
        path: "/dashboard",
        Component: Dashboard,
      },
      
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default router;