
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";

import usePaymentCart from "../hooks/usePaymentCart";
import useSecureAxios from "../hooks/useSecureAxios";
import { AuthContext } from "../Authentication/AuthProvider";
import toast from "react-hot-toast";



const CheakOut = () => {
    const stripe = useStripe()
    const {user}=useContext(AuthContext)
    const elements = useElements()
    const [clientSecret, setClientSecret]=useState('')
    const [transactionid, setTransictionId]=useState('')
    const [error, setError]= useState('')
    const axiosSecure=useSecureAxios()
    const [cart, ,refetch]=usePaymentCart()
   
    
        const totalPrice =cart.reduce((total,item)=>total+item.package,0)
        const price = parseInt(totalPrice)
        console.log("totalprice",totalPrice)
        console.log("price",price)

    
    // console.log(totalPrice)
    console.log(cart)
    // const package = [5,8,15]

    useEffect(()=>{
        if(price >0){
            axiosSecure.post('/create-payment-intent',{package:price})
            .then(res=>{
                if(price> 0){
                    setClientSecret(res.data.clientSecret)
                }
                console.log(res.data)
              
            })
        }
        
    },[axiosSecure,price])



    const handleSubmit =async(e)=>{
               e.preventDefault()
               if(!stripe || !elements){
                return
               }
               const card = elements.getElement(CardElement)
               
               if(card === null){
                return
               }


          
        const {error, paymentMethod}= await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('payment eerror',error);
            setError(error.message)
        }
        else{
            console.log('payment method',paymentMethod);
            setError('')
        }




          //    payment confirm


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)

            if(paymentIntent.status === 'succeeded'){
                console.log('transaction id', paymentIntent.id)
                setTransictionId(paymentIntent.id)

                // now save payment histroty in database
                const payment= {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), //utc date convert. use moment js 
                    cartIds: cart.map(item=>item._id),
                    menuItemIds: cart.map(item=>item.menuId),
                    status: 'pending'
                }
               const res= await axiosSecure.post('/payment',payment)
               refetch()

               console.log("Payment save",res.data.paymentResult.insertedId)
               if(res.data?.paymentResult?.insertedId){
                toast.success('payment success')

               }
            }
          }
    }



  

    
    return (
        <form onSubmit={handleSubmit
        }>
            <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-secondary mt-4" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      {transactionid && <p className="text-blue-600">transactionId: {transactionid}</p>}
      <p className="text-red-600">{error}</p>
        </form>
    );
};

export default CheakOut;