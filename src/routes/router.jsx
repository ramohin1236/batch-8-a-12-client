import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Employee from "../Pages/Employee/Employee";
import Admin from "../Pages/Admin/Admin";

import AuthOutlet from "../Authentication/AuthOutlet/AuthOutlet";
import Login from './../Authentication/Login/Login';


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path: '/',
            element: <Home/>
        },
       
      
        
      ]
      
    },


    // auth outlet
   {
       path: '/authentication',
       element: <AuthOutlet/>,
       children:[

        // {
        //     path: '/authentication/login',
        //     element: <Login/>
        // },
        {
            path: 'employee',
            element: <Employee/>
        },
        {
            path: 'admin',
            element: <Admin/>
        },
        {
            path: 'login',
            element:<Login/>
        }
       ]
   },
    
  ]);