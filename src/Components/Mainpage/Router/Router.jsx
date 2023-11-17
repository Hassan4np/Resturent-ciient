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
          element:<Cart></Cart>
        },
        {
          path:"users",
          element:<AllUsers></AllUsers>
        }
      ]
    }
  ]);
export {router}  