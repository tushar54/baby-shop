import { createBrowserRouter } from "react-router-dom";
import Home from "../AllRoute/Home";
import Cart from "../AllRoute/Cart";
import CardDetails from "../AllRoute/CardDetails";
import ErrorPage from "../AllComponent/ErrorPage";
import DemoRoute from "../AllRoute/DemoRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: '/cart',
    element: <Cart></Cart>
  },
  {
    path: '/Details/:id',
    element: <CardDetails></CardDetails>,
    loader: ({ params }) => fetch(`https://server-side-tau-lovat.vercel.app/CardDetails/${params.id}`),
  },
  {
    path: '/demoInfo',
    element: <DemoRoute></DemoRoute>
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>,
  },
]);