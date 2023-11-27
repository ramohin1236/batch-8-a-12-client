// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useEffect, useState } from "react";
// import usePublicAxios from "../hooks/usePublicAxios";
// import { parseActionCodeURL } from "firebase/auth";


// const CheakOut = () => {
//     const stripe = useStripe()
//     const elements = useElements()
//     const [clientSecret, setClientSecret]=useState('')
//     const [error, setError]= useState('')
//     const axiosPublic=usePublicAxios()
//     // const package = [5,8,15]

//     useEffect(()=>{
//         axiosPublic.post('/create-payment-intent',)
//         .then(res=>{
//             console.log(res.data)
//             setClientSecret(res.data.clientSecret)
//         })
//     },[axiosPublic])



//     const handleSubmit =async(e)=>{
//                e.preventDefault()
//                if(!stripe || !elements){
//                 return
//                }
//                const card = elements.getElement(CardElement)
               
//                if(card === null){
//                 return
//                }
//         const {error, paymentMethod}= await stripe.createPaymentMethod({
//             type: 'card',
//             card
//         })
//         if(error){
//             console.log('payment eerror',error);
//             setError(error.message)
//         }
//         else{
//             console.log('payment methosd',paymentMethod);
//             setError('')
//         }
//     }
    
//     return (
//         <form onSubmit={handleSubmit
//         }>
//             <CardElement
//         options={{
//           style: {
//             base: {
//               fontSize: '16px',
//               color: '#424770',
//               '::placeholder': {
//                 color: '#aab7c4',
//               },
//             },
//             invalid: {
//               color: '#9e2146',
//             },
//           },
//         }}
//       />
//       <button className="btn btn-secondary mt-4" type="submit" disabled={!stripe || !clientSecret}>
//         Pay
//       </button>
//       <p className="text-red-600">{error}</p>
//         </form>
//     );
// };

// export default CheakOut;