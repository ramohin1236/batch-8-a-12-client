/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import useSecureAxios from './../../hooks/useSecureAxios';
import Swal from "sweetalert2";


const RequestCart = ({ product }) => {


    const { image, type, quantity, productName, email } = product
    const { user } = useContext(AuthContext)
    // console.log("emailll",{email})
    const axiosSecure = useSecureAxios()

    const handleSubmit =async(e)=>{
            e.preventDefault()
            const form = e.target;
            const userName = form.name.value;
            const userImage = form.userImage.value;
            const from = form.from.value;
            const email = form.to.value;
            const productName = form.productName.value;
            const productPhoto = form.productPhoto.value;
            const type = form.type.value;

            const info ={ userName,userImage,from,email,productName,productPhoto,type}
            console.log("info valona",info,email)
           
            await axiosSecure.post('/request', info)
            .then(res=>{
                if(res.data.insertedId){
                    form.reset()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Request Sent!",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
                console.log(res)
            })
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className="w-64" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex justify-between">
                    <div>
                        <h2 className="card-title text-3xl">{productName}</h2>
                        <p><span className="text-lg font-bold">{email}</span></p>
                    </div>
                    <div>
                        <p className="text-xl text-blue-500 font-semibold">{type}</p>
                    </div>
                </div>
                <p className="text-xl">Stock: <span className="font-bold">{quantity}</span></p>
                <div className="card-actions justify-end">
                    <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn btn-primary">Request</button>
                </div>
            </div>



            {/* modal */}
            <dialog id="my_modal_1" className="modal">
                <form >

                </form>
                
                <div
                onSubmit={handleSubmit}
                className="modal-box">
                   
                <form action="">

                <h3 className="font-bold text-lg">Submit Those Information</h3>
                    {/* ----1---- */}
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Your Name</span>

                        </div>
                        <input type="text" name="name" placeholder="Type here" className="input input-bordered w-full max-w-xs" defaultValue={user?.displayName} readOnly />

                    </label>


                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Your Image</span>
                 
                        </div>
                        <input name='userImage' defaultValue={user?.photoURL} type="text" className="file-input file-input-bordered w-full max-w-xs" readOnly />
                        
                    </label>
                    {/* ----2---- */}
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">From</span>

                        </div>
                        <input name="from" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" defaultValue={user.email} readOnly />

                    </label>

                    {/* ----3---- */}
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-red-600">To</span>

                        </div>
                        <input name='to' type="text" placeholder="write here to owner email" className="input input-bordered w-full max-w-xs" required />

                    </label>
                    {/* ----3---- */}
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Product Name</span>

                        </div>
                        <input name='productName' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" defaultValue={productName} readOnly />

                    </label>
                    {/* ----3---- */}
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Product Name</span>

                        </div>
                        <input name='type' type="type" placeholder="Type here" className="input input-bordered w-full max-w-xs" defaultValue={type} readOnly />

                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Product Image</span>
                 
                        </div>
                        <input defaultValue={image} name='productPhoto' type="text" className="file-input file-input-bordered w-full max-w-xs" readOnly />
                        
                    </label>
                    
                            {/* if there is a button in form, it will close the modal */}
                            <button  type="submit" className="btn mt-6" >Request</button>
                        
                            <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
                </form>





                    <div className="modal-action">
                   
                        
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default RequestCart;