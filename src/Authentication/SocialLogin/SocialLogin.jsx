import { useNavigate } from "react-router-dom";
import usePublicAxios from "../../hooks/usePublicAxios";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    const {googleSignIn}=useContext(AuthContext)
    const axiosPublic = usePublicAxios()
    const navigate= useNavigate()


    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user)
            const userInfo ={
                email: result.user?.email,
                name: result.user?.displayName
            }
             axiosPublic.post('/users', userInfo)
             .then(res=>{
                console.log(res.data)
             })
             navigate('/dashboard/employeehome')
        })
    }

    return (
        <div className="p-8">
        <div className="divider"></div>
        <div>
        <button 
        onClick={handleGoogleSignIn}
        className="btn btn-outline w-full">
            <FaGoogle/>
            Button
        </button>
        </div>
    </div>
    );
};

export default SocialLogin;