/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useSecureAxios from '../../hooks/useSecureAxios';
import useCarts from '../../hooks/useCarts';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Authentication/AuthProvider';

const Etable = ({emp,add}) => {
    const [members, setMembers]=useState(0)
  console.log("janina", add)
    const {user}=useContext(AuthContext)
    const axiosSecure=useSecureAxios()
    const [data, refetch]=useCarts()
 console.log("fahsfkjash",members)
  const [employee,setEmployee]=useState([])

    const handleAddedEmployee = async()=>{
        const info ={
            userName: emp.userName,
            userImage: emp.userImage,
            type : "employee",
            stat: "added by employee",
            email: user.email
        }
        await axiosSecure.post('/employee-team', info)
        .then(res=>{
            if(res.data.insertedId){
            if(add === 5){
                setEmployee(res.data)
                setMembers===5
            }
            if(add === 8){
                setEmployee(res.data)
                setMembers===10
            }
            if(add === 15){
                setEmployee(res.data)
                setMembers===20
            }
                
                toast.success('employee added!')
            }
            console.log(res.data);
        })
     
    }

  


    const handleDelete =(id)=>{
        // console.log(id)
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
        <tr>
           
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
                     
    {/* {
        product.stat === 'approved'? 'approved' :

        <button
         
        onClick={()=>handleApproved(product)}
        className="btn btn-ghost btn-xs">Pending</button>
      } */}
                   
                    <th>
                        {
                            employee?.stat ? 'added by employee'
                            
                            :
                            <button
                      onClick={handleAddedEmployee}
                      className="btn btn-ghost btn-xs">
                        {employee.stat?"added": "Add"}
                    </button>
                        }
                      
                    </th>
                    <th>
                      <button
                       onClick={()=>handleDelete(emp._id)}
                      className="btn btn-ghost btn-xs">Remove</button>
                    </th>
        </tr>
    );
};

export default Etable;