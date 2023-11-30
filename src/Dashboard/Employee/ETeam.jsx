import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import useSecureAxios from "../../hooks/useSecureAxios";

const ETeam = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure= useSecureAxios()
    const [member,setMember]=useState([])

  const members = member.slice(0,2)
useEffect(()=>{
       axiosSecure.get('employee-team')
       .then(res=>{
        setMember(res.data)
        console.log(res.data)
       })
    },[axiosSecure,user.email])
    return (
        <div>
           <div className="text-4xl text-center m-6 text-blue-600">
                <p>Team Members</p>
                <div>
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {members.map((pen,index)=><tr key={pen._id}>
        <th>{index+1}</th>
        <td>{pen.userName}</td>
        <td>{pen.type}</td>
        <td>Blue</td>
      </tr>)}
      
   
    </tbody>
  </table>
</div>
                </div>
            </div>
        </div>
    );
};

export default ETeam;