import { useEffect, useState } from "react";
import useSecureAxios from "../../hooks/useSecureAxios";
import AdminCustomCard from "./AdminCustomCard";

const AdminCustom = () => {
    const [req,setReq]=useState([])
    const axiosSecure = useSecureAxios()
    useEffect(()=>{
        axiosSecure.get('/custom')
        .then(res=>{
            setReq(res.data)
            console.log(res.data)
        })
    },[axiosSecure])
    return (
       <div>
        <p className="text-4xl text-blue-500 text-center mt-6">Employee Request List</p>
         <div className="grid md:grid-cols-3 gap-5 m-12">
            {
                req.map(request=><AdminCustomCard
                key={request._id}
                request={request}
                ></AdminCustomCard>)
            }
        </div>
       </div>
    );
};

export default AdminCustom;