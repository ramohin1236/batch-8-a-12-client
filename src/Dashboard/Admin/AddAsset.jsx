import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Authentication/AuthProvider";
import usePublicAxios from "../../hooks/usePublicAxios";
import toast from "react-hot-toast";
import AdminName from "../../SharredComp/AdminName";
import useSecureAxios from "../../hooks/useSecureAxios";






const image_key = import.meta.env.VITE_image_key;

const image_api= `https://api.imgbb.com/1/upload?key=${image_key}`


const AddAsset = () => {
    const axiosSecure = useSecureAxios()
    const axiosPublic=usePublicAxios()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const {user, loading}=useContext(AuthContext)
    const onSubmit =async(data) => {
       console.log(data)
       const imageFile = { image: data.image[0] }
    //    TODO: this will be secure axios
       const res = await axiosPublic.post(image_api, imageFile, {
           headers: {
               'content-type': 'multipart/form-data'
           }
       })
       const info ={
        image: res.data.data.display_url,
        productName: data.name,
        quantity: data.quantity,
        published_date: data.date,
        type: data.package,
        email: data.email

       }

       await axiosSecure.post('/addProduct', info)
       .then(data=>{
        reset()
        if(data.data.insertedId){
            toast.success("Successfully added!")
        }
        console.log(data.data)
       })
           
               
    };
    return (
        <div>
            <AdminName></AdminName>
            <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-screen bg-base-300 ">
         

          <div >
          <div className="ml-12 flex gap-12">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Items Photo</span>

                    </label>
                    <input {...register('image', { required: true })}  type="file" className="file-input file-input-bordered w-full max-w-xs" />

                </div>
                {/* items name */}
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Items Name</span>
                </label>
                <input type="text"  {...register("name", { required: true })}  placeholder="Name" className="input input-bordered" />
                {errors.name && <span className="text-red-500">Name is required</span>}

              </div>
            </div>


               <div className="flex ml-12 mt-6 gap-6">
                  {/* items quantity */}
                  <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantiry</span>
                </label>
                <input type="number"  {...register("quantity", { required: true })}  placeholder="Quantity" className="input input-bordered" />
                {errors.name && <span className="text-red-500">Quatity is required</span>}

              </div>

              <div className="form-control mt-2 px-2">
                <label className="label">
                  <span className="label-text">Added Date</span>
                </label>
                <div className="border h-8 flex items-center ">
                <input className="py-2 rounded-lg px-2 "
                placeholder="dd/mm/yy"
                
                  {...register("date", { required: true })}
                type="text" name="date" id="" />  
                    </div>          
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

export default AddAsset;