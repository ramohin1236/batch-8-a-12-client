import { useContext, useEffect, useState } from "react";
import useSecureAxios from "../../hooks/useSecureAxios";
import { AuthContext } from "../../Authentication/AuthProvider";


const EmployeeList = () => {
    const [employee,setEmployee]=useState([])
    const axiosSecure= useSecureAxios()
    const {user}=useContext(AuthContext)
   useEffect(()=>{
        axiosSecure.get(`/employee-team?email=${user.email}`)
        .then(res=>{
            setEmployee(res.data)
            console.log(res.data);
        })
   },[axiosSecure,user.email])

    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="text-lg">
      <tr>
        <th></th>
        <th>Photo</th>
        <th>Name</th>
        <th>Type</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody className="text-lg">
      {employee.map((emp,index)=><tr 
      key={emp._id}
      className="bg-base-200">
        <th>{index+1}</th>
        <td><div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={emp.userImage}/>
              </div>
            </div>
            </div>
            </td>
        <td>{emp.userName}</td>
        <td>{emp.type}</td>
        <td> <button className="btn btn-ghost btn-xs">Remove Team</button></td>
      </tr>)}
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default EmployeeList;