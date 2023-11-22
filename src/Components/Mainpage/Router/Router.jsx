import {
    createBrowserRouter,
  } from "react-router-dom";
import MainPage from "../MainPage";
import Home from "../Home/Home";
import MenuPage from "../MenuItem/MenuPage";
import ShopPage from "../ShopPage/ShopPage";
import Signin from "../Register/Signin";
import Signup from "../Register/Signup";
import PrivateRout from "../PrivateRout/PrivateRout";
import Daseboard from "../Daseboard/Daseboard";
import Cart from "../Daseboard/Cart";
import AllUsers from "../Daseboard/AllUsers";
import AddItem from "../Daseboard/AddItem";
import Manageitem from "../Daseboard/Manageitem";
import Updateitem from "../Daseboard/Updateitem";
import AdminRoute from "../Adminrout/AdminRoute";
import Prement from "../Daseboard/Payment/Prement";
import Paymenthistory from "../Daseboard/Payment/Paymenthistory";
import UserHome from "../Daseboard/UserHome/UserHome";
import AdminHome from "../Daseboard/AdminHome/AdminHome";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage></MainPage>,
      children:[
        {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'/menu',
        element:<MenuPage></MenuPage>
      },
      {
        path:"/shop",
        element:<ShopPage></ShopPage>
      },
      {
        path:"/login",
        element:<Signin></Signin>
      },
      {
        path:"/signup",
        element:<Signup></Signup>
      },
      
    ]
    },
    {
      path:"/daseboard",
      element:<PrivateRout><Daseboard></Daseboard></PrivateRout>,
      children:[
        {
          path:'cart',
          element:<PrivateRout><Cart></Cart></PrivateRout>
        },
        {
          path:"additem",
          element:<AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path:"users",
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:"manage",
          element:<AdminRoute><Manageitem></Manageitem></AdminRoute>
        },
        {
          path:"update/:id",
          element:<AdminRoute><Updateitem></Updateitem></AdminRoute>,
          loader:({params})=>fetch(`https://resturent-backend.vercel.app/bistoboss/${params.id}`)
        },
        {
          path:"prement",
          element:<Prement></Prement>
        },
        {
          path:"history",
          element:<Paymenthistory></Paymenthistory>
        },
        {
          path:"userhome",
          element:< UserHome></UserHome>
        },
        {
          path:"adminhome",
          element:<AdminHome></AdminHome>
        }
       
      ]
    }
  ]);
export {router}  