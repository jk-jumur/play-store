import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RooteLayout from './layout/RootLayout';
import Apps from './pages/apps/Apps';
import HomePage from './pages/homepage/HomePage';
import InstalledApps from './pages/installApps/InstallApps';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RooteLayout,
    children: [
        {
          index:true,
          Component: HomePage,
        },

        {
          path:"/apps",
          Component:Apps
        },

         {
          path:'/installedApps',
          Component: InstalledApps,
         } 
    ],
     errorElement: <NotFoundPage/>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
