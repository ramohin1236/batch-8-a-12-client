/* eslint-disable react/prop-types */



const AdminCustomCard = ({request}) => {
      

    

    console.log(request)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  
  <div className="card-body">
    <h2 className="card-title">
     {request.productName}
      <div className="badge badge-secondary">{request.type}</div>
    </h2>
    <p>{request.need}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{request.quantity}BDT</div> 
      <button className="btn btn-sm">Add Asset</button>
     
    </div>
  </div>
</div>
    );
};

export default AdminCustomCard;