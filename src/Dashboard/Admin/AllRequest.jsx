/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import useSecureAxios from "../../hooks/useSecureAxios";
import { AuthContext } from "../../Authentication/AuthProvider";
import Swal from "sweetalert2";
import useCarts from "../../hooks/useCarts";
import toast from "react-hot-toast";


const AllRequest = () => {
    const [products, setProducts]=useState([])
    const [cart, refetch]=useCarts()
    // console.log("cart",cart)
    const {user}=useContext(AuthContext)

    const axiosSecure = useSecureAxios()
     
   useEffect(()=>{
    axiosSecure.get(`/request?email=${user?.email}`)
    .then(res=>{
        setProducts(res.data)
        console.log(res.data)
    })
   },[axiosSecure,user?.email])



    const handleApproved =(cart)=>{
        console.log('user',cart._id)
        axiosSecure.patch(`/users/approved/${cart._id}`)
        .then(res=>{
         console.log(res.data)
         if(res.data.modifiedCount >0){
             refetch()
           toast.success('approved!')
         }
        })
     }


    return (
        <div>
            <thead className="table table-zebra">
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Email</th>
                  
                  <th>stat</th>
                  <th>action</th>
               
                </tr>
              </thead>
           {
            products.map((product)=><div key={product._id} className="overflow-x-auto">
            <table className="table">
            <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={product.userImage}  />
                        </div>
                      </div>
                <tr>
                  <th>
                  
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      
                      <div>
                        <div className="font-bold">
                        <p>{product.productName}</p>
                           </div>
                       
                      </div>
                    </div>
                  </td>
                  
                  <td>
                   {product.type}
                  
                  </td>
                  <td>{product.from}</td>
                 
                  <td>
              
              {
                product.stat === 'approved'? 'approved' :

                <button
                 
                onClick={()=>handleApproved(product)}
                className="btn btn-ghost btn-xs">Pending</button>
              }
                 
                  </td>
                  
                  <th>
                  <button className="btn btn-ghost btn-xs">delete</button>
                  </th>
                </tr>
              
            
               
          
              {/* foot */}
              
              
            </table>
          </div>)
           }
        </div>
    );
};

export default AllRequest;