import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import { Login } from "../components/Forms/Login";
import { Rergister } from "../components/Forms/Rergister";
import { SearchDocuments } from "../components/searchDocuments/SearchDocuments";
import { OrderDetails } from "../components/orderDetails/OrderDetails";
import { OrderDetailsFinally } from "../components/orderFinally/OrderDetailsFinally";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Rergister />,
  },
  {
    path: "/search-document",
    element: <SearchDocuments />,
  },
  {
    path: "/order-details",
    element: <OrderDetails />,
  },
  {
    path: "/order",
    element: <OrderDetailsFinally />,
  },
]);
