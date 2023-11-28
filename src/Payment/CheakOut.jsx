import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import usePublicAxios from "../hooks/usePublicAxios";
import usePaymentCart from "../hooks/usePaymentCart";



const CheakOut = () => {
    const stripe = useStripe()
    const elements = useElements()
    const [clientSecret, setClientSecret]=useState('')
    const [error, setError]= useState('')
    const axiosPublic=usePublicAxios()
    const [cart]=usePaymentCart()
   
    
        const totalPrice =cart.reduce((total,item)=>total+item.package,0)
        const price = parseInt(totalPrice)
        console.log("totalprice",totalPrice)
        console.log("price",price)

    
    // console.log(totalPrice)
    console.log(cart)
    // const package = [5,8,15]

    useEffect(()=>{
        if(price >0){
            axiosPublic.post('/create-payment-intent',{package:price})
            .then(res=>{
                if(price> 0){
                    setClientSecret(res.data.clientSecret)
                }
                console.log(res.data)
              
            })
        }
        
    },[axiosPublic,price])



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
            console.log('payment methosd',paymentMethod);
            setError('')
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
      <p className="text-red-600">{error}</p>
        </form>
    );
};

export default CheakOut;