import { useContext, useEffect, useState } from "react";
import useSecureAxios from "../../hooks/useSecureAxios";
import { AuthContext } from "../../Authentication/AuthProvider";
import { Helmet } from "react-helmet-async";
import SharredHeader from './../../SharredComp/SharredHeader';

const MyAssets = () => {
        const {user}=useContext(AuthContext)
      const[info, setInfo]=useState([])
    //   console.log(info)
    const axiosSecure= useSecureAxios()
    
    useEffect(()=>{
     if(user?.email){
        axiosSecure.get(`/myasset?email=${user?.email}`)
        .then(res=>{
            setInfo(res.data)
            console.log(res.data)
        })
     }
    },[user?.email,axiosSecure])

    return (
        <div className="mt-12">

            <Helmet>
                <title>
                    Employee || My asset
                </title>
            </Helmet>
            
<div className="mb-10">
<SharredHeader heading={"MY ASSET"}></SharredHeader>
    
    </div>           
            <div>
            <div className="overflow-x-auto"> 
        <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        info.map((inf,idx)=><tr key={inf._id}>
            <th>{idx+1}</th>
            <td>{inf.productName}</td>
            <td>{inf.type}</td>
            <td>{inf.stat === "approved" ? "approved": "pending"}</td>
          </tr>)
      }
    
     
    </tbody>
  </table>
            </div>
            </div>
        </div>
    );
};

export default MyAssets;