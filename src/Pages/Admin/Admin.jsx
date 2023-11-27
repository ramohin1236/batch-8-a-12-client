import { useForm } from "react-hook-form";
import usePublicAxios from "../../hooks/usePublicAxios";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

const image_key = import.meta.env.VITE_image_key;

const image_api= `https://api.imgbb.com/1/upload?key=${image_key}`

const Admin = () => {
    const axiosPublic = usePublicAxios()
    // const navigate = useNavigate()
const {createUser,updateUserProfile,loading}= useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit =async(data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        // console.log(imageFile)
        const res = await axiosPublic.post(image_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        // console.log("res",res.data.data.display_url)
       
        
        const adminInfo ={
            name: data.name,
            email: data.email,
            date:data.date,
            cName: data.companyName,
            image: res.data.data.display_url,
            package: data.package

            
            
        }
        // console.log(userInfo)
    
      const axios = await axiosPublic.post('/users', adminInfo)
      if(axios.data.insertedId){
        toast.success('added')
      }
        // .then((data)=>{
        //   console.log(data)
        // })
    
    
        createUser(data.email, data.password)
            .then(result => {
    
                  
                const loggedUser = result.user;
                console.log(loggedUser)
            
                updateUserProfile(data.name, res.data.data.display_url)
                    .then(() => {
                        console.log('user profile info updated')
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // navigate('/payment');
    
                    })
                    .catch(error => console.log(error))
            })
    };
    return (
        <div className="hero min-h-screen bg-blue-100 ">
        
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold mb-3">Sign Up As HR/Admin!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form 
          onSubmit={handleSubmit(onSubmit)}
            className="card-body">
                {/*Your full name */}
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Full Name</span>
                </label>
                <input type="text"  {...register("name", { required: true })}  placeholder="Name" className="input input-bordered" />
                {errors.name && <span className="text-red-500">Name is required</span>}

              </div>
              {/* company name */}
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Company Full Name</span>
                </label>
                <input type="text"  {...register("companyName", { required: true })}  placeholder="companyName" className="input input-bordered" />
                {errors.name && <span className="text-red-500">Name is required</span>}

              </div>
              {/* image url */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Image</span>
                </label>
                <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                 </div>
                {errors.photoURL && <span className="text-red-500">Photoo is required</span>}
              </div>
              {/* Package */}
            
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Package</span>
                        </label>
                        <select defaultValue='default' {...register('package',{required: true})}
                            className="select select-bordered w-full ">
                            <option disabled value='default'>Select a Package</option>
                            <option value="5">5 Members for $5</option>
                            <option value="8">10 Members for $8</option>
                            <option value="15">20 Members for $15</option>
                           
                        </select>

                    </div>
                   
         
           
              {/* date of birth */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Birth Date</span>
                </label>
                <div className="border h-8 flex items-center ">
                <input
                placeholder="dd/mm/yy"
                
                  {...register("date", { required: true })}
                type="text" name="date" id="" />  
                    </div>          
                 </div>
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                {...register("email", { required: true })}
                type="email" name="email" placeholder="email" className="input input-bordered"  />
                 {errors.email && <span className="text-red-500">Email is required</span>}
              </div>
              {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                {...register("password", { required: true, minLength: 6, maxLength: 15,
                    pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~]).{6,}$/
                    })}
                type="password" placeholder="password" className="input input-bordered" required />
                 {errors.password?.type === "pattern" && (
                                <p className="text-red-500">Password must have one uppercase, one lowoer case, one special characters</p>
                            )} 

                            {errors.password?.type === "minLength" && (
                                <p className="text-red-500">Password must be 6 characters and maximum 15 characters</p>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <p className="text-red-500">Password should be maximum 15 characters</p>
                            )}

                            {errors.password?.type === "required" && (
                                <p className="text-red-500">Password is required</p>
                            )}
                <label className="label">
        
                </label>
              </div>
              <div className="form-control mt-6">
                <button 
               onSubmit={handleSubmit(onSubmit)}
                className="btn btn-primary" >
                    {loading? <span className="loading loading-spinner text-secondary"></span>
                          :
                          "join to Admin"
                          }
                  </button>
              
                  
            
              </div>
          <p className="text-xl text-red-600">{errors.errorMessage}</p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Admin;