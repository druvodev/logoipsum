import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import PartnerDetails from "../pages/PartnerDetails/PartnerDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/partner/:id",
        element: <PartnerDetails />,
      },
    ],
  },
]);

export default router;
