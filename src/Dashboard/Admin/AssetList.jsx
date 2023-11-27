import { useContext, useEffect, useState } from "react";
import usePublicAxios from "../../hooks/usePublicAxios";
import AssetListCart from "./AssetListCart";
import AdminName from "../../SharredComp/AdminName";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Authentication/AuthProvider";
import useCarts from "../../hooks/useCarts";
;

const AssetList = () => {
    // const [assets, setAssets]=useState([])
    const {loading,user}= useContext(AuthContext)
     const [cart, refetch]=useCarts()
    const publicAxios =usePublicAxios()


   

    // useEffect(()=>{
    //     publicAxios.get(`/addProduct?email=${user?.email}`)
    //     .then(data=>{
    //      setAssets(data.data)
    //     })
    // },[publicAxios,user?.email])

      

    return (
        <div>
            <Helmet>
                <title>Admin || Asset List</title>
            </Helmet>

            {
                loading? <span className="loading loading-spinner loading-lg "></span>:
                <>
                <div className="mt-2">
            <AdminName/>
            <div className="grid md:grid-cols-2 gap-5 mt-6 ml-6">
          {
              cart.map((item,index)=><AssetListCart
              key={item._id}
              item={item}
              ></AssetListCart>)
          }
        </div>
        </div>
                </>
            }
            
        </div>
    );
};

export default AssetList;