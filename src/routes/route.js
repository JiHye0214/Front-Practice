import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts/layout";

import HomePage from "../pages/home";
import MainPage from "../pages/main";
import TodoPage from "../pages/todo";

const router = createBrowserRouter([
  // RouteObject --> 배열형태
  {
    path: "",
    element: <RootLayout />,
    // RouteObject --> 배열형태
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/main",
        element: <MainPage />,
      },
      {
        path: "/todo",
        element: <TodoPage />,
      },
    ],
  },
]);

export default router 