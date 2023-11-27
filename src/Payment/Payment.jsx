// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import { Helmet } from "react-helmet-async";
// import CheakOut from "./CheakOut";






// // const stripePromise = loadStripe(import.meta.env.VITE_payment_key)
// const stripePromise = loadStripe(import.meta.env.VITE_payment_key)
// console.log(stripePromise)

// const Payment = () => {
//     return (
//         <div>
//             <Helmet>
//                 <title>
//                     payment
//                 </title>
//             </Helmet>

//             <div>
//                 <Elements stripe={stripePromise}>
//                   <div className="flex justify-center items-center mt-24">
//                   <div className=" card w-96 bg-blue-100 text-primary-content">
//                         <div className="card-body">
//                             <h2 className="card-title">Pay your bill!</h2>
//                             <CheakOut />
//                             <div className="card-actions justify-end">
                               
//                             </div>
//                         </div>
//                     </div>
//                   </div>
                 
//                 </Elements>
//             </div>
//         </div>
//     );
// };

// export default Payment;