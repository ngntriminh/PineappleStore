import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
  Link,
} from "react-router-dom";

// Importing routes
import Home from "./routes/Home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
];

const router = createBrowserRouter(routes);

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
