/* eslint-disable react/prop-types */
import { AuthContext } from "../AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

const AdminPrivateRoute = (children) => {
    const {user,loading} =useContext(AuthContext)
   const [isAdmin,isAdminLoading]= useAdmin()
   const location =useLocation()


   if(loading || isAdminLoading){
    return <progress className="progress w-64"></progress>
   }
   if(user && isAdmin){
    return children
   }
 
   return <Navigate to='/authentication/login' state={{from: location}} replace/>
};

export default AdminPrivateRoute;