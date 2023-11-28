import { useState } from "react";
import useSecureAxios from "../../hooks/useSecureAxios";
import RequestCart from "./RequestCart";


const RqestForAsset = () => {

    const axiosSecure = useSecureAxios()
     const [products, setProducts]=useState([])
    axiosSecure.get('/hrasset')
    .then(res=>{
        setProducts(res.data);
    })

    return (
       <div>
       
         <div className="grid md:grid-cols-2 gap-3 ml-5 mt-12">
            
            {
             products.map(product=><RequestCart
             key={product._id}
             product={product}
             ></RequestCart>)
            }
         </div>
       </div>
    );
};

export default RqestForAsset;