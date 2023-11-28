import axios from "axios";
import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";


const axiosSecure=axios.create({
    baseURL: 'http://localhost:5000'
})



const useSecureAxios = () => {
     const {logOut}=useContext(AuthContext)
    const navigate = useNavigate()

    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem("access-token")
        // console.log("requset stoped by interseptor",token)
        config.headers.authorization = `Bearer ${token}`
        return config
    },function(error){
        return Promise.reject(error)
    })
    axiosSecure.interceptors.response.use(function(response){
        return response
    },async(error)=>{
        const status = error.response.status
        // console.log("status code eroor in the inter", status);
        if(status === 401 || status === 403){
            await logOut()
            navigate('/authentication/login')
       
        }
        return Promise.reject(error)
    })
    return axiosSecure
};





export default useSecureAxios;