import { createBrowserRouter } from "react-router-dom";
import Home from "../AllRoute/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
  ]);