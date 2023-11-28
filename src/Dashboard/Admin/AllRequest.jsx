import { useContext, useState } from "react";
import useSecureAxios from "../../hooks/useSecureAxios";
import { AuthContext } from "../../Authentication/AuthProvider";


const AllRequest = () => {
    const [products, setProducts]=useState([])
    console.log(products)
    const {user}=useContext(AuthContext)

    const axiosSecure = useSecureAxios()
     
    axiosSecure.get(`/request?email=${user.email}`)
    .then(res=>{
        setProducts(res.data)
    })

    return (
        <div>
           {
            products.map((product)=><div key={product._id} className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                     #
                    </label>
                  </th>
                  <th>Name</th>
                  <th>Asset Name</th>
                  <th>Type</th>
                  <th>Email</th>
                  
                  <th>status</th>
                  <th>action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>
                  <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={product.userImage}  />
                        </div>
                      </div>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      
                      <div>
                        <div className="font-bold">
                        <p>{product.userName}</p>
                           </div>
                       
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>  {product.type}</p>
                  
                  </td>
                  <td>{product.from}</td>
                  <th>
                  {product.productName}
                  </th>
                  <th>
                  <button className="btn btn-ghost btn-xs">Pending</button>
                  </th>
                  <th>
                  <button className="btn btn-ghost btn-xs">delete</button>
                  </th>
                </tr>
              
            
               
              </tbody>
              {/* foot */}
              
              
            </table>
          </div>)
           }
        </div>
    );
};

export default AllRequest;