import { useContext, useEffect, useState } from "react";
import useSecureAxios from "../../hooks/useSecureAxios";


import { AuthContext } from "../../Authentication/AuthProvider";
import Etable from "../Employee/Etable";


const AddEmployee = () => {
    const axiosSecure= useSecureAxios()
    const [add, setadd]= useState([])
    const [employee,setEmployee]=useState([])

    const {user}= useContext(AuthContext)
   

       
    
  
  const handlePayment =()=>{

  }





  useEffect(()=>{
    axiosSecure.get(`/addEmployee?email=approved`)
    .then(res=>{
       setEmployee(res.data)
    })
},[axiosSecure])


    useEffect(()=>{
        axiosSecure.get(`/paymentns?email=${user.email}`)
        .then(res=>{
            setadd(parseFloat(res.data[0].price))
        })
    },[axiosSecure,user.email])

   
   
    
     

   

    return (
        <div className="m-12">
            <div className="flex justify-between">
            <p className="text-4xl"> Members: {employee.length} </p>
              {/* <div className="text-4xl">
              You can Add {members.length} Members
              </div> */}
            </div>
          <div>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="text-lg">
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Add Employee Team</th>
        <th>Delete</th>
        <th></th>
      </tr>
    </thead>
    <tbody className="text-lg">
      {/* row 1 */}
      
      {
                employee.map(emp=><Etable
                    handlePayment={handlePayment}
                    key={emp._id}
                    add={add}
                   
                emp={emp}
                ></Etable>)
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