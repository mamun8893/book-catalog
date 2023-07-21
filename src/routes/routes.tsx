import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import CreateBook from "../pages/CreateBook";
import PrivateRoute from "./PrivateRoute";
import AllBooks from "../pages/AllBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/create-book",
        element: (
          <PrivateRoute>
            <CreateBook />,
          </PrivateRoute>
        ),
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
