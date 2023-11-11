import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts/layout";

import HomePage from "../pages/home";
import MainPage from "../pages/main";
import TodoPage from "../pages/todo";

import StateTest from "../HooksTest/useState";
import RefTest from "../HooksTest/useRef";
import EffectTest from "../HooksTest/useEffect";
import InputState from "../HooksTest/input";
import Test from "../HooksTest/useRef2";
import InputMdf from "../HooksTest/inputMdf";


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
  {
    path: "/state",
    element: <StateTest/>
  },
  {
    path: "/ref",
    element: <RefTest/>
  },
  {
    path: "/effect",
    element: <EffectTest/>
  },
  {
    path: "/input",
    element: <InputState/>
  },
  {
    path: "/ref2",
    element: <Test/>
  },
  {
    path: "/input-mdf",
    element: <InputMdf/>
  },
]);

export default router 