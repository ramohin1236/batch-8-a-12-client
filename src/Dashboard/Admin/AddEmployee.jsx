import { useEffect, useState } from "react";
import useSecureAxios from "../../hooks/useSecureAxios";
import useCarts from "../../hooks/useCarts";
import toast from "react-hot-toast";
import Swal from "sweetalert2";


const AddEmployee = () => {
    const axiosSecure= useSecureAxios()
    const [employee, setEmployee]=useState([])
    const [cart, refetch]= useCarts()
    useEffect(()=>{
            axiosSecure.get(`/addEmployee?email=approved`)
            .then(res=>{
                console.log(res.data)
                setEmployee(res.data)
            })
    },[axiosSecure])

     
    const handleDelete =(id)=>{
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/deleteEmployee/${id}`)
            .then(res=>{
                refetch()
                console.log(res.data)
               
                toast.success("deleted")
             
            })
           
              
            }
          });
    }

    return (
        <div className="m-12">
            <p className="text-4xl"> Members: {employee.length}</p>
           
          <div>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
      {
                employee.map(emp=><tr key={emp._id}>
                    <th>
                    <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={emp.userImage}alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                       
                        <div>
                          <div className="font-bold">{emp.userName}</div>
                
                        </div>
                      </div>
                    </td>
                    <td>
                     Normal employee
                     
                    </td>
                   
                    <th>
                      <button
                       onClick={()=>handleDelete(emp._id)}
                      className="btn btn-ghost btn-xs">Remove</button>
                    </th>
                  </tr>)
       }
      
     
    </tbody>
    {/* foot */}
  
    
  </table>
</div>
             
          </div>
        </div>
    );
};

export default AddEmployee;