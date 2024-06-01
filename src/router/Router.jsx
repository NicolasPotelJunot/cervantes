import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import { Login } from "../components/Forms/Login";
import { Rergister } from "../components/Forms/Rergister";

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
]);
