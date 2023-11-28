import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";
import toast from "react-hot-toast";
// import useAdmin from "../../hooks/useAdmin";




const Login = () => {
    // const employee = "/dashboard/employeehome";
    // const admin = "/dashboard/home";
    
    //   const navigate= useNavigate();
    //   const [isAdmin]= useAdmin();
    //   const location= useLocation();
    //   const from =location.state?.from?.pathname || '/'

  
    
 
 const {signInUser}= useContext(AuthContext)

 const handleLogin =(e)=>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const info = {email,password}
    console.log(info)
    signInUser(email,password)
    .then(result=>{
        const user = result.user
         toast.success("Congratulation")
       
        console.log(user)
        
      
    })
    // {isAdmin ? 
    //     navigate('/dashboard/home') :
    //     navigate('/dashboard/employeehome')
    // } 

 }
    
    return (
        <div className="hero min-h-screen bg-base-200">
              <Helmet>
        <title> asset || Sign in</title>
    </Helmet>
        <div className="hero-content flex-col ">

          {/* button */}
             <div className="flex justify-between gap-8 ">
                     <div>
                          <Link to='/authentication/employee'><button className="btn btn-outline btn-sm btn-primary">Sign up as employee</button></Link>
                     </div>
                     <div>
                     <Link to='/authentication/admin'><button className="btn btn-outline btn-sm btn-primary">Sign up as HR/admin</button></Link>

                     </div>
             </div>
        {/* button */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
            onSubmit={handleLogin}
            className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <SocialLogin/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;