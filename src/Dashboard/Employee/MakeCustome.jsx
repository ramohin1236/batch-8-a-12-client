import { useContext } from "react";
import useSecureAxios from "../../hooks/useSecureAxios";
import { AuthContext } from "../../Authentication/AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";










const MakeCustome = () => {




    const axiosSecure = useSecureAxios()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const {user, loading}=useContext(AuthContext)
    const onSubmit =async(data) => {
       console.log(data)
     
       const info ={
     
        productName: data.name,
        quantity: data.price,
        need:data.need,
        type: data.package,
        email: data.email

       }

       await axiosSecure.post('/custom', info)
       .then(data=>{
        reset()
        if(data.data.insertedId){
            toast.success("Successfully added!")
        }
        console.log(data.data)
       }) 
    }





    return (
        <div>
       
        <form
    onSubmit={handleSubmit(onSubmit)}
    className="h-screen bg-base-300 ">
     

      <div >
      <div className="ml-12 flex gap-12">
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Asset Photo</span>

                </label>
                <input {...register('image', { required: true })}  type="file" className="file-input file-input-bordered w-full max-w-xs" />

            </div>
            {/* items name */}
            <div className="form-control">
            <label className="label">
              <span className="label-text">Asset Name</span>
            </label>
            <input type="text"  {...register("name", { required: true })}  placeholder="Name" className="input input-bordered" />
            {errors.name && <span className="text-red-500">Name is required</span>}

          </div>
        </div>


           <div className="flex ml-12 mt-6 gap-6">
              {/* items quantity */}
              <div className="form-control">
            <label className="label">
              <span className="label-text">Product Price</span>
            </label>
            <input type="number"  {...register("price", { required: true })}  placeholder="Quantity" className="input input-bordered" />
            {errors.name && <span className="text-red-500">Quatity is required</span>}

          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Why do you need ?</span>
            </label>
            <input type="text"  {...register("need", { required: true })}  placeholder="Name" className="input input-bordered" />
            {errors.name && <span className="text-red-500">Name is required</span>}

          </div>

           </div>


           <div className="flex  ml-12 gap-6">
           <div className="form-control  my-6">
                    <label className="label">
                        <span className="label-text">Package</span>
                    </label>
                    <select defaultValue='default' {...register('package',{required: true})}
                        className="select select-bordered w-full ">
                        <option disabled value='default'>Selected Type</option>
                        <option value="returnable">Returnable</option>
                        <option value="non-returnable">Non-returnable</option>
                     
                       
                    </select>

                </div>
                 {/* email */}
          <div className="form-control mt-6 ml-6">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            {...register("email", { required: true })}
            type="email" name="email" placeholder="email" className="input input-bordered" defaultValue={user?.email} readOnly/>
                   
          </div>
   
           </div>
          
        <div className="ml-36 mt-7">
        <button className="btn btn-outline btn-sm " type="submit" value='Submit'>
            {
                 loading? <span className="loading loading-spinner loading-md"></span> : "Submit"
        }</button>
        </div>
      </div>
    </form>
    </div>
    );
};

export default MakeCustome;