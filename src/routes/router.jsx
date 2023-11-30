import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Employee from "../Pages/Employee/Employee";
import Admin from "../Pages/Admin/Admin";

import AuthOutlet from "../Authentication/AuthOutlet/AuthOutlet";
import Login from './../Authentication/Login/Login';
import Dashboard from "../Dashboard/Dashboard";
import AdminHome from "../Dashboard/Admin/AdminHome";
import EmployeeList from "../Dashboard/Admin/EmployeeList";
import AddEmployee from "../Dashboard/Admin/AddEmployee";
import AssetList from "../Dashboard/Admin/AssetList";
import AddAsset from "../Dashboard/Admin/AddAsset";
import AllRequest from "../Dashboard/Admin/AllRequest";
import CustomeRequest from "../Dashboard/Admin/CustomeRequest";
import EHome from "../Dashboard/Employee/EHome";
import ETeam from "../Dashboard/Employee/ETeam";
import MyAssets from "../Dashboard/Employee/MyAssets";
import RqestForAsset from "../Dashboard/Employee/RqestForAsset";
import MakeCustome from "../Dashboard/Employee/MakeCustome";
import Profile from "../Dashboard/Employee/Profile";
import Payment from "../Payment/Payment";
import PrivateRoute from "../Authentication/PrivateRoute/PrivateRoute";
import AdminPrivateRoute from "../Authentication/PrivateRoute/AdminPrivateRoute";
import PaymentHistory from "../Dashboard/Admin/PaymentHistory";
// import Payment from "../Payment/Payment";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/payment',
            element: <Payment/>
        }
       
      
        
      ]
      
    },

     {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard/></PrivateRoute>,
        children:[
            {
              path: 'home',
              element: <AdminPrivateRoute><AdminHome/></AdminPrivateRoute>
            },
            {
              path: 'list',
              element: <AdminPrivateRoute><EmployeeList/></AdminPrivateRoute>
            },
            {
              path: 'addEmployee',
              element: <AdminPrivateRoute><AddEmployee/></AdminPrivateRoute>
            },
            {
              path: 'assetlist',
              element: <AdminPrivateRoute><AssetList/></AdminPrivateRoute>
            },
            {
              path: 'addasset',
              element: <AdminPrivateRoute><AddAsset/></AdminPrivateRoute>
            },
            {
              path: 'payment',
              element: <AdminPrivateRoute><PaymentHistory/></AdminPrivateRoute>
            },
            {
              path: 'allr',
              element: <AdminPrivateRoute><AllRequest/></AdminPrivateRoute>
            },
            {
              path: 'cmr',
              element: <AdminPrivateRoute><CustomeRequest/></AdminPrivateRoute>
            },
            {
                path:'employeehome',
                element: <EHome/>
            },
            {
                path:'myteam',
                element: <ETeam/>
            },
            {
                path:'easset',
                element: <MyAssets/>
            },
            {
                path:'eRqAsset',
                element: <RqestForAsset/>
            },
            {
                path:'makeCRequest',
                element: <MakeCustome/>
            },
            {
                path:'profile',
                element: <Profile/>
            },
        ]
     },
    // auth outlet
   {
       path: '/authentication',
       element: <AuthOutlet/>,
       children:[

     
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