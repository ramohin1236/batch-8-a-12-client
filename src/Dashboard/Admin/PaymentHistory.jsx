import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../hooks/useSecureAxios";

const PaymentHistory = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure = useSecureAxios()
    const {data : payments =[]}=useQuery({
        queryKey:['payments', user.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/paymentns?email=${user.email}`)
            return res.data
        }
    })
    return (
        <div className="m-10">
            <p className="text-3xl">Hello <span className="font-bold text-blue-500">{user.displayName}</span> you pay <span className="text-blue-500 font-bold">{payments.length}</span> times</p>
            <div className="overflow-x-auto mt-6 ">
  <table className="table table-zebra">
    {/* head */}
    <thead className="text-xl">
      <tr>
        <th>#</th>
        <th>Package price</th>
        <th>Transiction Id</th>
        <th>Payment Date</th>
      </tr>
    </thead>
    <tbody className="text-xl">
      {payments.map((payment,index)=> <tr key={payment._id}>
        <th>{index+1}</th>
        <td>${parseFloat(payment.price)}</td>
        <td>{payment.transactionId}</td>
        <td>{payment.date}</td>
      </tr>)}
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;