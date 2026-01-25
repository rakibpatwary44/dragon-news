import { createBrowserRouter } from "react-router";

import HomeLayout from "./../Layout/HomeLayout";
import Home from "./../Componants/Home";
import CategoryNews from "../Pages/CategoryNews";
import ErrorPage from "../Pages/ErrorPage";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Componants/NewsDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "//newsDetails/:id",
    Component: NewsDetails,
    loader: () => fetch("/news.json"),
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
