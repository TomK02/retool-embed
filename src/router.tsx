import { Outlet, createBrowserRouter, RouteObject } from "react-router-dom";
import AuthPage from "./AuthPage";
import Retool from "./Page/Retool";
import ProtectedRoute from "./auth/ProtectedRoute";
import Unauthenticated from "./auth/Unauthenticated";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: (
          <Unauthenticated>
            <AuthPage />
          </Unauthenticated>
        ),
      },
      {
        path: "/retool",
        element: (
          <ProtectedRoute>
            <Retool />
          </ProtectedRoute>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
