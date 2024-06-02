import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import { Login } from "../components/Forms/Login";
import { Rergister } from "../components/Forms/Rergister";
import { SearchDocuments } from "../components/searchDocuments/SearchDocuments";
import { OrderDetails } from "../components/orderDetails/OrderDetails";
import { OrderDetailsFinally } from "../components/orderFinally/OrderDetailsFinally";
import { UpgradeFile } from "../components/upgradeFile/UpgradeFile";
import { UsersList } from "../components/users list/UsersList";
import { ModifyUser } from "../components/modify User/ModifyUser";
import { AdministrationDocuments } from "../components/administration documents/AdministrationDocuments";
import { ModifyDocument } from "../components/modify document/ModifyDocument";

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
  {
    path: "/subir-archivo",
    element: <UpgradeFile />,
  },
  {
    path: "/subir-archivo",
    element: <UpgradeFile />,
  },
  {
    path: "/list-users",
    element: <UsersList />,
  },
  {
    path: "/modify-user",
    element: <ModifyUser />,
  },
  {
    path: "/administration-documents",
    element: <AdministrationDocuments />,
  },
  {
    path: "/modify-documents",
    element: <ModifyDocument />,
  },
]);
