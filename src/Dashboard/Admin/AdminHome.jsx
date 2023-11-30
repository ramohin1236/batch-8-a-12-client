import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import useSecureAxios from "../../hooks/useSecureAxios";
import AdminHomeCart from "./AdminHomeCart";
import PieChartt from "./PieChartt";



const AdminHome = () => {
    const [pending , setPending] =useState([])
    const [topMentionedProducts,setTopMentioneProducts]=useState([])
    console.log(topMentionedProducts)
    const { user } = useContext(AuthContext)
    // const [cart]=useCarts()
    const productsToShow = pending.slice(0, 5);
     console.log(productsToShow)
        const axiosSecure =useSecureAxios()
   
        useEffect(()=>{
         axiosSecure.get('/requests')
         .then(res=>{
            console.log(res.data)
            setPending(res.data)

                   const productCount = {};
                   res.data.forEach(item => {
                        const productName = item.productName.toLowerCase(); 
                       productCount[productName] = (productCount[productName] || 0) + 1;
                     });


              const sortedProducts = Object.keys(productCount).sort((a, b) => productCount[b] - productCount[a]);


                const topMentionedProducts = sortedProducts.slice(0, 5); 

                setTopMentioneProducts(topMentionedProducts);
        })
   
         },[axiosSecure])
    
    return (
        <div >
          <div className="flex justify-evenly"> 
          <div>
           <p className="text-2xl mt-4 ml-4">Welcome our honorable admin <span className="text-black font-bold">{user?.displayName}</span></p>
           </div>
            <div className="avatar mt-4">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL} />
                </div>
            </div>           
          </div>
           <div className="text-center text-blue-600">
            <p className="text-5xl">Pending Items</p>
           </div>
           <div >
           <div className="">
  <table className="table ml-12 text-lg">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            #
          </label>
        </th>
        <th>User Name</th>
        <th>Product Name</th>
        <th>Type</th>
        <th></th>
      </tr>
    </thead>
    <tbody >
       {productsToShow.map((pend,index)=><tr key={pend._id} className="bg-base-200">
        <th>{index+1}</th>
        <td>{pend.userName}</td>
        <td>{pend.productName}</td>
        <td>{pend.type}</td>
      </tr>)}
      
   
      
      
    </tbody>
    {/* foot */}
   
    
  </table>
</div>
             
           </div>

              <div className="text-center mt-12 text-blue-600">
                <p className="text-4xl">Top Most Request Products</p>
                <div className="gird">
                    {topMentionedProducts.map(top=><AdminHomeCart
                    key={top._id}
                    top={top}
                    ></AdminHomeCart>)}
                </div>
              </div>
             <div className="text-center mt-12 text-blue-500">
                <p className="text-4xl">Re Charts</p>
             <PieChartt/>
             </div>
              <div>
               
              </div>

        </div>
    );
};

export default AdminHome;