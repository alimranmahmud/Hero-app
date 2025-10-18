import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import MainLayOut from "../MainLayout/MainLayOut";
import { createBrowserRouter } from "react-router";
import AppDetails from "../Pages/AppDetails";
import ErrorPage from "../Pages/ErrorPage";
import LoadingSpinner from "../Components/LoadingSpinner";

const router = createBrowserRouter([
  {
    path:"/",
    Component: MainLayOut,
    hydrateFallbackElement:<LoadingSpinner></LoadingSpinner>,
    
    children:([
      {
        index:true,
        Component:Home
      },
      {
        path:"/apps",
        Component:Apps
      },
      {
        path:"/installation",
        Component:Installation
      },
      {
        path:"/appDetails/:id",
        Component:AppDetails
      }
    ])
  },
  {
    path:'*',
    element:<ErrorPage></ErrorPage>
  }
])

export default router;