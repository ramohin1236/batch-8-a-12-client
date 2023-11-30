/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useCarts from '../../hooks/useCarts';
import useSecureAxios from '../../hooks/useSecureAxios';

const AssetListCart = ({item}) => {
    const [cart,refetch]= useCarts()
    const axiosSecure = useSecureAxios()
    console.log(item)
    // console.log("cart",cart)
    const {image,productName,published_date,quantity,type}=item


    
    
    const handleDelete =(id)=>{
        console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            axiosSecure.delete(`/deleteEmployee/${id}`)
            .then(res=>{
                if(res.data.deletedCount > 0){{
                    refetch()
                  Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
                }}
            })
           
              
            }
          });
    }



    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-64' src={image} alt="Shoes" /></figure>
            <div className="card-body">
            <div className='flex justify-between'>
            <div> <h2 className="card-title">{productName}</h2></div>
                <div className="badge badge-secondary">{type}</div>
            </div>
              <p className='text-xl'>Stock: <span className='text-2xl text-blue-500'>{quantity}</span></p>
                <p >Added date: {published_date}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-sm hover:text-green-500"><FaEdit /></button>
                    <button
                    onClick={()=>handleDelete(item._id)}
                    className="btn btn-sm hover:text-red-500"><FaTrash /></button>
                    
                </div>
            </div>
        </div>
    );
};



AssetListCart.propTypes = {
    item: PropTypes.object
}

export default AssetListCart;