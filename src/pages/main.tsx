import React from "react";
import ReactDOM from "react-dom/client";
import App from "../pages/App.tsx";
import "../css/index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    error: <Error />,
    Children: [
      path: "Town",
      element:<Town/>,
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
