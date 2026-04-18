import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./layout/rootLayout.jsx";
import Timeline from "./pages/Timeline/timeline.jsx";
import Stats from "./pages/stat/stats.jsx";
import Homepage from "./pages/homepage/homepage.jsx";
import FriendDetails from "./pages/friendDetails/friendDetails.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
        
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },

      
      {
        path: "/friend/:id",
        element: <FriendDetails />,
      },
    ],
    errorElement: <div className="p-10 text-center">404 Not Found</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);